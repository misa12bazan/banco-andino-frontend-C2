// Sesión global: quién inició sesión (usuario + token). Se guarda en sessionStorage.
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import * as authApi from '../api/auth.js';
import { guardarToken, borrarToken } from '../api/http.js';

const AuthContext = createContext(null);

function leerUsuario() {
  try { return JSON.parse(sessionStorage.getItem('usuario')); } catch { return null; }
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(leerUsuario);

  const cerrarSesion = useCallback(() => {
    sessionStorage.removeItem('usuario');
    borrarToken();
    setUsuario(null);
  }, []);

  const iniciarSesion = useCallback(async (correo, contrasena) => {
    const { token, usuario: u } = await authApi.login(correo, contrasena);
    guardarToken(token);
    sessionStorage.setItem('usuario', JSON.stringify(u));
    setUsuario(u);
    return u;
  }, []);

  // Si el backend responde 401 con token, la sesión venció
  useEffect(() => {
    window.addEventListener('sesion-vencida', cerrarSesion);
    return () => window.removeEventListener('sesion-vencida', cerrarSesion);
  }, [cerrarSesion]);

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export const paginaSegunRol = u => (u.rol === 'cliente' ? '/registro' : '/panel');
