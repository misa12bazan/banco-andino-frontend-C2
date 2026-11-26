import { http } from './http.js';

// Cliente
export const listarMias = () => http('/mis-solicitudes');
export const obtenerMia = id => http('/mis-solicitudes/' + id);
export const crearMia = d => http('/mis-solicitudes', { metodo: 'POST', cuerpo: d });
export const actualizarMia = (id, d) => http('/mis-solicitudes/' + id, { metodo: 'PUT', cuerpo: d });

// Administrador / empleado
export const listarTodas = () => http('/solicitudes');
export const crearComoPanel = d => http('/solicitudes', { metodo: 'POST', cuerpo: d });
export const actualizarComoPanel = (id, d) => http('/solicitudes/' + id, { metodo: 'PUT', cuerpo: d });
export const eliminarSolicitud = id => http('/solicitudes/' + id, { metodo: 'DELETE' });
