// Mensaje de éxito (tipo "ok") o de error (tipo "error"). Si no hay texto no se muestra.
export default function Mensaje({ tipo = 'ok', texto }) {
  if (!texto) return null;
  return <p className={'msg ' + tipo + ' anim'} role="alert">{texto}</p>;
}

// Convierte un error de la API en texto, incluyendo la lista de validaciones si existe
export const textoError = err =>
  err.detalles && err.detalles.length ? err.message + ': ' + err.detalles.join('. ') + '.' : err.message;
