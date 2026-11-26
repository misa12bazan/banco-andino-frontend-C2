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
1. Copia `.env.example` como `.env` y revisa `VITE_API_URL` (en local: `http://localhost:3000/api`).
2. `npm install` y `npm run dev` → http://localhost:5173 (con el backend encendido).
3. Publicación en Vercel: framework Vite, y variable `VITE_API_URL` = `https://TU-API.onrender.com/api`.

## Cuentas de prueba (clave 1234)
`admin@correo.com` · `empleado1@correo.com` · `cliente1@correo.com`
