import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth, paginaSegunRol } from '../hooks/useAuth.jsx';
import { registrarCliente } from '../api/auth.js';
import Mensaje, { textoError } from '../components/Mensaje.jsx';

export default function Login() {
  const { usuario, iniciarSesion } = useAuth();
  const navegar = useNavigate();
  const [login, setLogin] = useState({ correo: '', contrasena: '' });
  const [cuenta, setCuenta] = useState({ nombre: '', correo: '', contrasena: '' });
  const [msgLogin, setMsgLogin] = useState(null);
  const [msgCuenta, setMsgCuenta] = useState(null);

  if (usuario) return <Navigate to={paginaSegunRol(usuario)} replace />;

  async function entrar(e) {
    e.preventDefault();
    setMsgLogin(null);
    try {
      const u = await iniciarSesion(login.correo.trim(), login.contrasena);
      navegar(paginaSegunRol(u));
    } catch (err) {
      setMsgLogin({ tipo: 'error', texto: err.status === 401 ? 'Correo o contraseña incorrectos.' : textoError(err) });
    }
  }

  async function crear(e) {
    e.preventDefault();
    setMsgCuenta(null);
    try {
      await registrarCliente({ nombre: cuenta.nombre.trim(), correo: cuenta.correo.trim(), contrasena: cuenta.contrasena });
      setMsgCuenta({ tipo: 'ok', texto: 'Cuenta creada. Ya puedes iniciar sesión.' });
      setCuenta({ nombre: '', correo: '', contrasena: '' });
    } catch (err) {
      setMsgCuenta({ tipo: 'error', texto: err.status === 409 ? 'Ese correo ya tiene una cuenta. Inicia sesión.' : textoError(err) });
    }
  }

  return (
    <main className="dos">
      <section className="tarjeta">
        <h2>Iniciar sesión</h2>
        <form onSubmit={entrar}>
          <label htmlFor="lcorreo">Correo</label>
          <input id="lcorreo" type="email" required value={login.correo} onChange={e => setLogin({ ...login, correo: e.target.value })} />
          <label htmlFor="lclave">Contraseña</label>
          <input id="lclave" type="password" required value={login.contrasena} onChange={e => setLogin({ ...login, contrasena: e.target.value })} />
          <p><button type="submit">Iniciar sesión</button></p>
        </form>
        <Mensaje {...msgLogin} />
      </section>
      <section className="tarjeta">
        <h2>Crear cuenta</h2>
        <form onSubmit={crear}>
          <label htmlFor="cnombre">Nombre completo</label>
          <input id="cnombre" required maxLength={100} value={cuenta.nombre} onChange={e => setCuenta({ ...cuenta, nombre: e.target.value })} />
          <label htmlFor="ccorreo">Correo</label>
          <input id="ccorreo" type="email" required value={cuenta.correo} onChange={e => setCuenta({ ...cuenta, correo: e.target.value })} />
          <label htmlFor="cclave">Contraseña</label>
          <input id="cclave" type="password" required minLength={4} value={cuenta.contrasena} onChange={e => setCuenta({ ...cuenta, contrasena: e.target.value })} />
          <p><button type="submit">Crear cuenta</button></p>
        </form>
        <Mensaje {...msgCuenta} />
      </section>
    </main>
  );
}
