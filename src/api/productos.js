import { http } from './http.js';

export const listarProductos = categoria => http('/productos' + (categoria ? '?categoria=' + categoria : ''));
