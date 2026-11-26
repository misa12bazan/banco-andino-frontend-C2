import { http } from './http.js';

// Paga el plan de tarjeta y registra la solicitud en un solo paso
export const pagarYRegistrar = datos => http('/pagos', { metodo: 'POST', cuerpo: datos });
