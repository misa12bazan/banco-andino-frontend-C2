import { http } from './http.js';

export const login = (correo, contrasena) => http('/auth/login', { metodo: 'POST', cuerpo: { correo, contrasena } });
export const registrarCliente = datos => http('/auth/registro', { metodo: 'POST', cuerpo: datos });
