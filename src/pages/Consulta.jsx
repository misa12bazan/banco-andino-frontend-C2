import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarMias } from '../api/solicitudes.js';
import Mensaje from '../components/Mensaje.jsx';

export const fmtMonto = (m, mon) => (mon === 'USD' ? 'US$ ' : 'S/ ') + Number(m).toFixed(2);
export const fmtFecha = f => new Date(f).toLocaleDateString('es-PE');

export default function Consulta() {
  const [filas, setFilas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    listarMias().then(setFilas).catch(() => setError('No se pudieron cargar tus solicitudes.'));
  }, []);

  return (
    <main>
      <section className="tarjeta">
        <h1>Mis solicitudes</h1>
        <Mensaje tipo="error" texto={error} />
        <div className="tabla">
          <table>
            <thead><tr><th>Código</th><th>Titular</th><th>Cuenta</th><th>Monto inicial</th><th>Estado</th><th>Fecha</th><th>Acción</th></tr></thead>
            <tbody>
              {filas && filas.length === 0 && (
                <tr><td colSpan="7">Aún no tienes solicitudes. <Link to="/registro">Abre tu primera cuenta</Link>.</td></tr>
              )}
              {(filas || []).map(r => (
                <tr key={r.id}>
                  <td>{r.codigo_seguimiento}</td>
                  <td>{r.nombres} {r.apellidos}</td>
                  <td>{r.tipo_cuenta}</td>
                  <td>{fmtMonto(r.monto_inicial, r.moneda)}</td>
                  <td><span className={'estado ' + r.estado}>{r.estado}</span></td>
                  <td>{fmtFecha(r.fecha_registro)}</td>
                  <td>{r.estado === 'registrado' ? <Link className="btn" to={'/actualizar/' + r.id}>Editar</Link> : 'Solo lectura'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
