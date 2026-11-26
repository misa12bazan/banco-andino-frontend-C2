# Banco Andino Perú · Frontend (React + Vite)

Migración a React del sitio del parcial (HTML, CSS y JavaScript nativo). Consume la API del backend.

## Arquitectura
- `src/main.jsx`: punto de entrada; envuelve la app con el Router y la sesión.
- `src/App.jsx`: mapa de rutas (públicas, de cliente y de administrador/empleado).
- `src/pages/`: una pantalla por ruta (Inicio, Servicios, Login, Registro, Consulta, Actualizar, Panel...).
- `src/components/`: piezas reutilizables (Layout, RutaProtegida, SolicitudForm, ProductoCard, Mensaje...).
- `src/hooks/`: `useAuth` (sesión), `useTurno` (turno del empleado), `useEfectos` (efectos visuales).
- `src/api/`: llamadas `fetch` al backend (`http.js` agrega el token JWT).
- `src/styles/`: los CSS del parcial.

## Puesta en marcha
 → http://localhost:5173 (con el backend encendido).
 → 

## Cuentas de prueba (clave 1234)
`admin@correo.com` · `empleado1@correo.com` · `cliente1@correo.com`
