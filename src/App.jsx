// Mapa de rutas: qué componente se dibuja para cada URL
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import Inicio from './pages/Inicio.jsx';
import Servicios from './pages/Servicios.jsx';
import ComoFunciona from './pages/ComoFunciona.jsx';
import Contacto from './pages/Contacto.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Consulta from './pages/Consulta.jsx';
import Actualizar from './pages/Actualizar.jsx';
import Panel from './pages/Panel.jsx';
import NoEncontrada from './pages/NoEncontrada.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RutaProtegida roles={['cliente']} />}>
          <Route path="/registro" element={<Registro />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/actualizar/:id" element={<Actualizar />} />
        </Route>

        <Route element={<RutaProtegida roles={['administrador', 'empleado']} />}>
          <Route path="/panel" element={<Panel />} />
        </Route>

        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}
