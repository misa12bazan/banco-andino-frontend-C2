// Panel de gestión (administrador y empleado): CRUD de solicitudes con la regla del turno
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';
import { useTurno } from '../hooks/useTurno.js';
import { listarTodas, crearComoPanel, actualizarComoPanel, eliminarSolicitud } from '../api/solicitudes.js';
import SolicitudForm from '../components/SolicitudForm.jsx';
import Mensaje, { textoError } from '../components/Mensaje.jsx';
import { fmtMonto, fmtFecha } from './Consulta.jsx';

export default function Panel() {
  const { usuario } = useAuth();
  const { esEmpleado, enTurno, horario } = useTurno(usuario);
  const [registros, setRegistros] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [form, setForm] = useState(null);   // null = oculto, {} = nueva, {...} = editando
  const [msg, setMsg] = useState(null);

  const cargar = useCallback(async () => {
    try { setRegistros(await listarTodas()); }
    catch { setMsg({ tipo: 'error', texto: 'No se pudieron cargar los registros.' }); }
  }, []);
  useEffect(() => { cargar(); }, [cargar]);

  // Si el turno termina con el formulario abierto, se cierra
  useEffect(() => {
    if (!enTurno) {
      setForm(null);
      setMsg({ tipo: 'error', texto: `Tu turno (${usuario.turno || 'no asignado'}) es de ${horario}. Solo puedes consultar registros.` });
    } else if (esEmpleado) {
      setMsg({ tipo: 'ok', texto: 'Estás en turno: puedes crear, editar y eliminar registros.' });
    }
  }, [enTurno, esEmpleado, horario, usuario.turno]);

  const q = buscar.toLowerCase();
  const filtrados = registros.filter(r =>
    (r.codigo_seguimiento + r.nombres + r.apellidos + r.dni + r.estado).toLowerCase().includes(q));

  async function guardar(datos) {
    try {
      if (form.id) {
        await actualizarComoPanel(form.id, datos);
        setMsg({ tipo: 'ok', texto: 'Registro actualizado.' });
      } else {
        const s = await crearComoPanel(datos);
        setMsg({ tipo: 'ok', texto: 'Registro creado con código ' + s.codigo_seguimiento + '.' });
      }
      setForm(null);
      cargar();
    } catch (err) { setMsg({ tipo: 'error', texto: 'No se pudo guardar. ' + textoError(err) }); }
  }

  async function eliminar(id) {
    if (!window.confirm('¿Eliminar este registro? Esta acción no se puede deshacer.')) return;
    try {
      await eliminarSolicitud(id);
      setMsg({ tipo: 'ok', texto: 'Registro eliminado.' });
      cargar();
    } catch (err) { setMsg({ tipo: 'error', texto: 'No se pudo eliminar. ' + textoError(err) }); }
  }

  return (
    <main>
      <section className="tarjeta">
        <h1>Panel de gestión</h1>
        {esEmpleado && (
          <p className={'turno-info ' + (enTurno ? 'en-turno' : 'fuera-turno')}>
            Turno {usuario.turno || 'no asignado'} ({horario}) — {enTurno ? 'en turno: puedes crear, editar y eliminar' : 'fuera de turno: solo lectura'}
          </p>
        )}
        <Mensaje {...msg} />
        <div className="barra">
          {enTurno && <button type="button" onClick={() => setForm({})}>Nueva solicitud</button>}
          <div>
            <label htmlFor="buscar">Buscar por código, nombre, DNI o estado</label>
            <input id="buscar" type="search" value={buscar} onChange={e => setBuscar(e.target.value)} />
          </div>
          <strong>{filtrados.length} registros</strong>
        </div>

        {form && (
          <section className="tarjeta">
            <h2>{form.id ? 'Editar solicitud ' + form.codigo_seguimiento : 'Nueva solicitud'}</h2>
            <SolicitudForm key={form.id || 'nueva'} inicial={form.id ? form : undefined} conEstado textoBoton="Guardar" alEnviar={guardar}>
              <button type="button" className="sec" onClick={() => setForm(null)}>Cancelar</button>
            </SolicitudForm>
          </section>
        )}

        <div className="tabla">
          <table>
            <thead><tr><th>Código</th><th>Titular</th><th>Cliente</th><th>Cuenta</th><th>Monto inicial</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr></thead>
            <tbody>
              {filtrados.length === 0 && <tr><td colSpan="8">No hay registros.</td></tr>}
              {filtrados.map(r => (
                <tr key={r.id}>
                  <td>{r.codigo_seguimiento}</td>
                  <td>{r.nombres} {r.apellidos}</td>
                  <td>{r.cliente || 'Sin cliente (panel)'}</td>
                  <td>{r.tipo_cuenta}</td>
                  <td>{fmtMonto(r.monto_inicial, r.moneda)}</td>
                  <td><span className={'estado ' + r.estado}>{r.estado}</span></td>
                  <td>{fmtFecha(r.fecha_registro)}</td>
                  <td className="acciones">
                    {enTurno ? (
                      <>
                        <button type="button" onClick={() => setForm(r)}>Editar</button>
                        <button type="button" className="peligro" onClick={() => eliminar(r.id)}>Eliminar</button>
                      </>
                    ) : <span style={{ fontSize: '0.85rem' }}>Solo lectura</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
