// Turnos de los trabajadores (hora de Lima). El backend vuelve a validar: aquí solo se muestra al usuario.
import { useEffect, useState } from 'react';

const TURNOS = {
  'mañana': { inicio: 6, fin: 14 },
  tarde: { inicio: 14, fin: 22 },
  noche: { inicio: 22, fin: 6 }
};
const SIMULADA = import.meta.env.VITE_HORA_SIMULADA;

const horaActual = () => {
  if (SIMULADA !== undefined && SIMULADA !== '') return Number(SIMULADA);
  return Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Lima', hour: '2-digit', hourCycle: 'h23' }).format(new Date()));
};

export function estaEnTurno(turno) {
  if (!turno || !TURNOS[turno]) return false;
  const h = horaActual();
  const { inicio, fin } = TURNOS[turno];
  return inicio < fin ? h >= inicio && h < fin : h >= inicio || h < fin; // "noche" cruza la medianoche
}

export function horarioTurno(turno) {
  if (!turno || !TURNOS[turno]) return 'turno no asignado';
  const f = h => String(h).padStart(2, '0') + ':00';
  return `${f(TURNOS[turno].inicio)} a ${f(TURNOS[turno].fin)}`;
}

// Revisa el turno cada 30 s: si termina o empieza con el panel abierto, cambia solo
export function useTurno(usuario) {
  const esEmpleado = usuario?.rol === 'empleado';
  const [enTurno, setEnTurno] = useState(() => !esEmpleado || estaEnTurno(usuario?.turno));
  useEffect(() => {
    if (!esEmpleado) { setEnTurno(true); return undefined; }
    const revisar = () => setEnTurno(estaEnTurno(usuario.turno));
    revisar();
    const t = setInterval(revisar, 30000);
    return () => clearInterval(t);
  }, [esEmpleado, usuario?.turno]);
  return { esEmpleado, enTurno, horario: horarioTurno(usuario?.turno) };
}
