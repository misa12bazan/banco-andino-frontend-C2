// Protege rutas: sin sesión => /login; con otro rol => a su página
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, paginaSegunRol } from '../hooks/useAuth.jsx';

export default function RutaProtegida({ roles }) {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;
  if (!roles.includes(usuario.rol)) return <Navigate to={paginaSegunRol(usuario)} replace />;
  return <Outlet />;
}
