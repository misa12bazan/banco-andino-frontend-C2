// Efectos del parcial (aparición al hacer scroll, carrusel de portada y brillo "glass"), adaptados a React.
import { useEffect } from 'react';

const REDUCIR = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const VIDRIO = '.card-servicio, .acceso, .tarjeta-contacto, .widget-calificacion, .tarjeta, .form-apertura, .hero-puntos li, .nota-lateral, .carrusel-slide figcaption, .hero-chip';

function iniciarReveal() {
  if (REDUCIR || !('IntersectionObserver' in window)) return () => {};
  const obs = new IntersectionObserver(entradas => {
    entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('main section h2, main section h3, .card-servicio, .acceso, .tarjeta-contacto, .widget-calificacion, .tabla-comparativa, .footer-inner > div')
    .forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
      obs.observe(el);
    });
  return () => obs.disconnect();
}

function iniciarCarrusel() {
  const carrusel = document.querySelector('.hero-carrusel');
  if (!carrusel) return () => {};
  const slides = [...carrusel.querySelectorAll('.carrusel-slide')];
  const contPuntos = carrusel.querySelector('.hero-carrusel-dots');
  const creados = [];
  slides.forEach((s, i) => {
    s.setAttribute('role', 'group');
    s.setAttribute('aria-roledescription', 'diapositiva');
    s.setAttribute('aria-label', (i + 1) + ' de ' + slides.length);
    const p = document.createElement('button');
    p.type = 'button'; p.className = 'dot';
    p.setAttribute('aria-label', 'Ir a la diapositiva ' + (i + 1));
    contPuntos.appendChild(p);
    creados.push(p);
  });
  const pausa = carrusel.querySelector('.hero-carrusel-pausa');
  let actual = 0, enPausa = REDUCIR, temporizador = null, xInicio = null;

  const ir = n => {
    actual = (n + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle('is-activo', i === actual);
      s.setAttribute('aria-hidden', i === actual ? 'false' : 'true');
    });
    creados.forEach((p, i) => {
      p.classList.toggle('is-activo', i === actual);
      p.setAttribute('aria-current', i === actual ? 'true' : 'false');
    });
  };
  const detener = () => clearInterval(temporizador);
  const arrancar = () => { detener(); if (!enPausa) temporizador = setInterval(() => ir(actual + 1), 5000); };
  const mover = n => { ir(n); arrancar(); };
  const etiquetaPausa = () => {
    pausa.textContent = enPausa ? '▶' : '⏸';
    pausa.setAttribute('aria-label', enPausa ? 'Reanudar carrusel' : 'Pausar carrusel');
  };
  const onAnt = () => mover(actual - 1);
  const onSig = () => mover(actual + 1);
  const onPausa = () => { enPausa = !enPausa; etiquetaPausa(); arrancar(); };
  const onTecla = e => { if (e.key === 'ArrowLeft') mover(actual - 1); if (e.key === 'ArrowRight') mover(actual + 1); };
  const onTouchIni = e => { xInicio = e.touches[0].clientX; };
  const onTouchFin = e => {
    if (xInicio === null) return;
    const dx = e.changedTouches[0].clientX - xInicio;
    if (Math.abs(dx) > 40) mover(actual + (dx < 0 ? 1 : -1));
    xInicio = null;
  };
  const onVisible = () => (document.hidden ? detener() : arrancar());

  const ant = carrusel.querySelector('.carrusel-flecha--ant');
  const sig = carrusel.querySelector('.carrusel-flecha--sig');
  ant.addEventListener('click', onAnt);
  sig.addEventListener('click', onSig);
  creados.forEach((p, i) => p.addEventListener('click', () => mover(i)));
  pausa.addEventListener('click', onPausa);
  carrusel.addEventListener('mouseenter', detener);
  carrusel.addEventListener('mouseleave', arrancar);
  carrusel.addEventListener('focusin', detener);
  carrusel.addEventListener('focusout', arrancar);
  carrusel.addEventListener('keydown', onTecla);
  carrusel.addEventListener('touchstart', onTouchIni, { passive: true });
  carrusel.addEventListener('touchend', onTouchFin);
  document.addEventListener('visibilitychange', onVisible);
  etiquetaPausa();
  ir(0);
  arrancar();

  return () => {
    detener();
    document.removeEventListener('visibilitychange', onVisible);
    ant.removeEventListener('click', onAnt);
    sig.removeEventListener('click', onSig);
    pausa.removeEventListener('click', onPausa);
    carrusel.removeEventListener('mouseenter', detener);
    carrusel.removeEventListener('mouseleave', arrancar);
    carrusel.removeEventListener('focusin', detener);
    carrusel.removeEventListener('focusout', arrancar);
    carrusel.removeEventListener('keydown', onTecla);
    carrusel.removeEventListener('touchstart', onTouchIni);
    carrusel.removeEventListener('touchend', onTouchFin);
    creados.forEach(p => p.remove());
  };
}

function iniciarGlass() {
  if (REDUCIR) return () => {};
  let raf = null;
  const mover = e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      const el = e.target.closest && e.target.closest(VIDRIO);
      if (el) {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }
      const root = document.documentElement.style;
      root.setProperty('--px', ((e.clientX / window.innerWidth) - 0.5).toFixed(3));
      root.setProperty('--py', ((e.clientY / window.innerHeight) - 0.5).toFixed(3));
    });
  };
  document.addEventListener('pointermove', mover, { passive: true });
  return () => document.removeEventListener('pointermove', mover);
}

// ruta: cada vez que cambia la página se vuelven a aplicar el reveal y el carrusel
export function useEfectos(ruta) {
  useEffect(() => {
    const limpiarReveal = iniciarReveal();
    const limpiarCarrusel = iniciarCarrusel();
    return () => { limpiarReveal(); limpiarCarrusel(); };
  }, [ruta]);

  useEffect(() => iniciarGlass(), []);
}
