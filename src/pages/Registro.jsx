// Solicitud de apertura. Si eliges un plan de tarjeta CON costo, aparece el apartado de pago.
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { crearMia } from '../api/solicitudes.js';
import { listarProductos } from '../api/productos.js';
import { pagarYRegistrar } from '../api/pagos.js';
import SolicitudForm from '../components/SolicitudForm.jsx';
import PagoTarjeta, { PAGO_VACIO } from '../components/PagoTarjeta.jsx';
import Mensaje, { textoError } from '../components/Mensaje.jsx';

export default function Registro() {
  const [params] = useSearchParams();
  const [planes, setPlanes] = useState([]);
  const [idPlan, setIdPlan] = useState(params.get('producto') || '');
  const [pago, setPago] = useState(PAGO_VACIO);
  const [msg, setMsg] = useState(null);
  const [version, setVersion] = useState(0); // al cambiar, el formulario se vacía

  useEffect(() => {
    listarProductos('tarjeta').then(setPlanes).catch(() => setPlanes([]));
  }, []);

  const plan = planes.find(p => String(p.id) === String(idPlan));
  const requierePago = plan && Number(plan.costo_mensual) > 0;

  async function enviar(datos) {
    setMsg(null);
    try {
      if (requierePago) {
        const { pago: p, solicitud } = await pagarYRegistrar({ id_producto: plan.id, ...pago, solicitud: datos });
        setMsg({ tipo: 'ok', texto: `Pago aprobado: S/ ${Number(p.monto).toFixed(2)} con ${p.marca} terminada en ${p.tarjeta_ultimos4}. Tu código de seguimiento es ${solicitud.codigo_seguimiento}.` });
      } else {
        const s = await crearMia(datos);
        setMsg({ tipo: 'ok', texto: 'Solicitud registrada. Tu código de seguimiento es ' + s.codigo_seguimiento + '.' });
      }
      setPago(PAGO_VACIO);
      setVersion(v => v + 1);
    } catch (err) {
      setMsg({ tipo: 'error', texto: (requierePago ? 'No se pudo procesar el pago ni la solicitud. ' : 'No se pudo registrar la solicitud. ') + textoError(err) });
    }
  }

  const extra = (
    <>
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="plan">Plan de tarjeta de crédito (opcional)</label>
        <select id="plan" value={idPlan} onChange={e => setIdPlan(e.target.value)}>
          <option value="">Solo abrir cuenta, sin tarjeta</option>
          {planes.map(p => (
            <option key={p.id} value={p.id}>
              {p.nombre} — {Number(p.costo_mensual) > 0 ? 'S/ ' + Number(p.costo_mensual).toFixed(2) + ' al mes' : 'sin costo'}
            </option>
          ))}
        </select>
      </div>
      {requierePago && <PagoTarjeta valor={pago} alCambiar={setPago} monto={plan.costo_mensual} />}
    </>
  );

  return (
    <main>
      <section className="tarjeta">
        <h1>Solicitud de apertura de cuenta</h1>
        <SolicitudForm key={version} extra={extra} textoBoton={requierePago ? 'Pagar y enviar solicitud' : 'Enviar solicitud'} alEnviar={enviar} />
        <Mensaje {...msg} />
      </section>
    </main>
  );
}
