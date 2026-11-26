import { Link } from 'react-router-dom';

export default function ProductoCard({ producto }) {
  const costo = Number(producto.costo_mensual);
  const beneficios = producto.beneficios ? producto.beneficios.split('|') : [];
  return (
    <article className="card-servicio">
      <h3>{producto.nombre}</h3>
      <p className="precio">{costo === 0 ? 'Sin costo de mantenimiento' : 'S/ ' + costo.toFixed(2) + ' al mes'}</p>
      <p>{producto.descripcion}</p>
      {beneficios.length > 0 && (
        <ul>{beneficios.map(b => <li key={b}>{b}</li>)}</ul>
      )}
      <Link to="/registro" className="btn btn-outline btn-block">Lo quiero</Link>
    </article>
  );
}
