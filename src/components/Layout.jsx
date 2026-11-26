// Marco común de todas las páginas: barra superior, cabecera con sesión, contenido y pie
import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { useEfectos } from '../hooks/useEfectos.js';

const PAGINAS_APP = ['/login', '/registro', '/consulta', '/actualizar', '/panel'];

export default function Layout() {
  const { pathname } = useLocation();
  const { usuario, cerrarSesion } = useAuth();
  const navegar = useNavigate();

  // Las páginas de la aplicación usan la clase "app" en <body> (estilos del parcial)
  useEffect(() => {
    const esApp = PAGINAS_APP.some(p => pathname.startsWith(p));
    document.body.className = esApp ? 'app' + (pathname.startsWith('/panel') ? ' app-ancha' : '') : '';
    window.scrollTo(0, 0);
  }, [pathname]);

  useEfectos(pathname);

  const salir = () => { cerrarSesion(); navegar('/login'); };
  const nav = ({ isActive }) => (isActive ? 'activa' : undefined);

  return (
    <>
      <div className="barra-superior">
        <div className="wrap barra-superior-inner">
          <nav className="tabs-audiencia" aria-label="Selecciona tu perfil">
            <Link to="/" className="tab-audiencia">Independientes</Link>
            <Link to="/servicios" className="tab-audiencia">Planes de tarjetas de crédito</Link>
          </nav>
          <p className="idiomas">Español <span aria-hidden="true">/</span> Quechua</p>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <Link to="/" className="logo"><span className="logo-marca">»</span> Banco Andino <span>Perú</span></Link>
          <nav className="main-nav" aria-label="Navegación principal">
            <NavLink to="/" end className={nav}>Inicio</NavLink>
            <NavLink to="/servicios" className={nav}>Cuentas</NavLink>
            <NavLink to="/como-funciona" className={nav}>Cómo abrir tu cuenta</NavLink>
            <NavLink to="/registro" className={nav}>Abrir cuenta</NavLink>
            <NavLink to="/contacto" className={nav}>Contacto</NavLink>
          </nav>
          <div className="header-acciones" id="acciones-sesion">
            {usuario ? (
              <>
                {usuario.rol === 'cliente' ? (
                  <>
                    <Link to="/registro" className="btn btn-outline">Abrir cuenta</Link>
                    <Link to="/consulta" className="btn btn-outline">Mis solicitudes</Link>
                  </>
                ) : (
                  <Link to="/panel" className="btn btn-outline">Panel de gestión</Link>
                )}
                <span className="quien">
                  {usuario.nombre} ({usuario.rol}{usuario.rol === 'empleado' && usuario.turno ? ' · ' + usuario.turno : ''})
                </span>
                <button type="button" className="btn btn-acento" onClick={salir}>Cerrar sesión</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline">Crear cuenta</Link>
                <Link to="/login" className="btn btn-acento">Banca por Internet</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <p className="logo logo-footer">Banco Andino <span>Perú</span></p>
            <p>Banca comercial para independientes y mypes. Sitio académico elaborado para el curso de Diseño Web — entidad de nombre ficticio con fines de práctica.</p>
          </div>
          <div>
            <h3>Navegación</h3>
            <p><Link to="/servicios">Cuentas</Link></p>
            <p><Link to="/como-funciona">Cómo abrir tu cuenta</Link></p>
            <p><Link to="/registro">Solicitud de apertura</Link></p>
            <p><Link to="/login">Ingresar a Banca por Internet</Link></p>
            <p><Link to="/contacto">Ubicación y contacto</Link></p>
          </div>
          <div>
            <h3>Autor</h3>
            <p>Proyecto de Jair Bazán</p>
          </div>
        </div>
      </footer>
    </>
  );
}
