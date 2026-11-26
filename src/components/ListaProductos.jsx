// Planes de tarjetas de crédito: los datos llegan desde la API (GET /api/productos?categoria=tarjeta)
import { useEffect, useState } from 'react';
import { listarProductos } from '../api/productos.js';
import ProductoCard from './ProductoCard.jsx';

export default function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [estado, setEstado] = useState('cargando');

  useEffect(() => {
    let activo = true;
    listarProductos('tarjeta')
      .then(d => { if (activo) { setProductos(d); setEstado('listo'); } })
      .catch(() => { if (activo) setEstado('error'); });
    return () => { activo = false; };
  }, []);

  return (
    <section className="servicios">
      <div className="wrap">
        <h2>Planes de tarjetas de crédito</h2>
        <p className="section-lead">Elige el plan que se adapta a tu forma de comprar y pagar.</p>
        {estado === 'cargando' && <p>Cargando planes...</p>}
        {estado === 'error' && <p className="msg error">No se pudieron cargar los planes. Intenta de nuevo más tarde.</p>}
        {estado === 'listo' && (
          <div className="cards-servicios">
            {productos.map(p => <ProductoCard key={p.id} producto={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
