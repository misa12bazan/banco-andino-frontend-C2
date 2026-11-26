// Campos de pago con tarjeta (simulado). Va dentro del formulario de Registro.
export const PAGO_VACIO = { titular: '', numero_tarjeta: '', vencimiento: '', cvv: '' };

export default function PagoTarjeta({ valor, alCambiar, monto }) {
  const set = (campo, v) => alCambiar({ ...valor, [campo]: v });

  const formatearNumero = v => v.replace(/\D/g, '').slice(0, 19).replace(/(.{4})/g, '$1 ').trim();
  const formatearVence = v => {
    const n = v.replace(/\D/g, '').slice(0, 4);
    return n.length > 2 ? n.slice(0, 2) + '/' + n.slice(2) : n;
  };

  return (
    <section className="tarjeta" aria-label="Pago con tarjeta" style={{ marginTop: '1.2rem' }}>
      <h2>Pagar con tarjeta</h2>
      <p>Total a pagar hoy: <strong>S/ {Number(monto).toFixed(2)}</strong> (primera mensualidad del plan).</p>
      <div className="grid">
        <div>
          <label htmlFor="titular">Nombre del titular</label>
          <input id="titular" autoComplete="cc-name" required maxLength={100} value={valor.titular}
            onChange={e => set('titular', e.target.value)} />
        </div>
        <div>
          <label htmlFor="numero_tarjeta">Número de tarjeta</label>
          <input id="numero_tarjeta" inputMode="numeric" autoComplete="cc-number" placeholder="4111 1111 1111 1111"
            required minLength={13} maxLength={23} value={valor.numero_tarjeta}
            onChange={e => set('numero_tarjeta', formatearNumero(e.target.value))} />
        </div>
        <div>
          <label htmlFor="vencimiento">Vencimiento (MM/AA)</label>
          <input id="vencimiento" inputMode="numeric" autoComplete="cc-exp" placeholder="12/29" required
            pattern="(0[1-9]|1[0-2])/[0-9]{2}" title="Formato MM/AA" maxLength={5} value={valor.vencimiento}
            onChange={e => set('vencimiento', formatearVence(e.target.value))} />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" type="password" inputMode="numeric" autoComplete="cc-csc" required pattern="[0-9]{3,4}"
            title="3 o 4 dígitos" maxLength={4} value={valor.cvv}
            onChange={e => set('cvv', e.target.value.replace(/\D/g, ''))} />
        </div>
      </div>
      <p style={{ fontSize: '.85rem' }}>
        Pago <strong>simulado</strong> para fines académicos: no se cobra dinero real y solo se guardan los últimos 4 dígitos.
        Puedes usar la tarjeta de prueba 4111 1111 1111 1111, cualquier fecha futura y cualquier CVV.
      </p>
    </section>
  );
}
