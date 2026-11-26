import { Link } from 'react-router-dom';

export default function NoEncontrada() {
  return (
    <main>
      <section className="tarjeta">
        <h1>Página no encontrada</h1>
        <p><Link to="/">Volver al inicio</Link></p>
      </section>
    </main>
  );
}
