// Formulario de solicitud de apertura. Lo usan Registro, Actualizar y el Panel.
import { useState } from 'react';

const VACIO = { nombres: '', apellidos: '', dni: '', telefono: '', tipo_cuenta: 'ahorros', moneda: 'PEN', monto_inicial: '', estado: 'registrado' };

export default function SolicitudForm({ inicial, conEstado = false, deshabilitado = false, textoBoton, alEnviar, children }) {
  const [d, setD] = useState({ ...VACIO, ...(inicial || {}) });
  const cambiar = e => setD({ ...d, [e.target.name]: e.target.value });

  const enviar = e => {
    e.preventDefault();
    alEnviar({
      nombres: d.nombres.trim(), apellidos: d.apellidos.trim(), dni: d.dni, telefono: d.telefono,
      tipo_cuenta: d.tipo_cuenta, moneda: d.moneda, monto_inicial: Number(d.monto_inicial),
      ...(conEstado ? { estado: d.estado } : {})
    });
  };

  return (
    <form onSubmit={enviar}>
      <fieldset disabled={deshabilitado} style={{ border: 0, padding: 0, margin: 0 }}>
        <div className="grid">
          <div><label htmlFor="nombres">Nombres</label>
            <input id="nombres" name="nombres" value={d.nombres} onChange={cambiar} required maxLength={80} /></div>
          <div><label htmlFor="apellidos">Apellidos</label>
            <input id="apellidos" name="apellidos" value={d.apellidos} onChange={cambiar} required maxLength={80} /></div>
          <div><label htmlFor="dni">DNI</label>
            <input id="dni" name="dni" value={d.dni} onChange={cambiar} required inputMode="numeric" pattern="[0-9]{8}" title="8 dígitos" maxLength={8} /></div>
          <div><label htmlFor="telefono">Teléfono</label>
            <input id="telefono" name="telefono" type="tel" value={d.telefono} onChange={cambiar} required pattern="9[0-9]{8}" title="9 dígitos, empieza con 9" maxLength={9} /></div>
          <div><label htmlFor="tipo_cuenta">Tipo de cuenta</label>
            <select id="tipo_cuenta" name="tipo_cuenta" value={d.tipo_cuenta} onChange={cambiar} required>
              <option value="ahorros">Ahorros</option><option value="corriente">Corriente</option><option value="sueldo">Sueldo</option>
            </select></div>
          <div><label htmlFor="moneda">Moneda</label>
            <select id="moneda" name="moneda" value={d.moneda} onChange={cambiar} required>
              <option value="PEN">Soles (S/)</option><option value="USD">Dólares (US$)</option>
            </select></div>
          <div><label htmlFor="monto_inicial">Monto inicial</label>
            <input id="monto_inicial" name="monto_inicial" type="number" min="0" step="0.01" value={d.monto_inicial} onChange={cambiar} required /></div>
          {conEstado && (
            <div><label htmlFor="estado">Estado</label>
              <select id="estado" name="estado" value={d.estado} onChange={cambiar}>
                <option value="registrado">Registrado</option><option value="atendido">Atendido</option><option value="rechazado">Rechazado</option>
              </select></div>
          )}
        </div>
        <p><button type="submit">{textoBoton}</button> {children}</p>
      </fieldset>
    </form>
  );
}
