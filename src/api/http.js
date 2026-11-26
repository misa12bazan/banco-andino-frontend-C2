// Función base para hablar con el backend. Agrega el token y convierte los errores en excepciones.
const BASE = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api').replace(/\/$/, '');

export const guardarToken = t => sessionStorage.setItem('token', t);
export const leerToken = () => sessionStorage.getItem('token');
export const borrarToken = () => sessionStorage.removeItem('token');

export class ApiError extends Error {
  constructor(status, mensaje, detalles) {
    super(mensaje);
    this.status = status;
    this.detalles = detalles || [];
  }
}

export async function http(ruta, { metodo = 'GET', cuerpo } = {}) {
  const token = leerToken();
  const cabeceras = { 'Content-Type': 'application/json' };
  if (token) cabeceras.Authorization = 'Bearer ' + token;

  let respuesta;
  try {
    respuesta = await fetch(BASE + ruta, {
      method: metodo,
      headers: cabeceras,
      body: cuerpo ? JSON.stringify(cuerpo) : undefined
    });
  } catch {
    throw new ApiError(0, 'No se pudo conectar con el servidor. Intenta de nuevo en un momento.');
  }

  const datos = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok) {
    // Token vencido o inválido: se cierra la sesión (el login con clave mala no tiene token y no entra aquí)
    if (respuesta.status === 401 && token) window.dispatchEvent(new Event('sesion-vencida'));
    throw new ApiError(respuesta.status, datos.error || 'Error del servidor', datos.detalles);
  }
  return datos;
}
