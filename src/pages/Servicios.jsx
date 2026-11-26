import { Link } from 'react-router-dom';
import ListaProductos from '../components/ListaProductos.jsx';
export default function Servicios() {
  return (
    <main>


    <section className="hero-pagina">
      <div className="wrap">
        <p className="hero-kicker">Cuentas / Servicios</p>
        <h1>Elige la cuenta que se ajusta a tu forma de trabajar</h1>
        <p className="hero-lead-pagina">Todas se abren de forma online y todas incluyen banca por app. La diferencia está en el volumen de operaciones y las herramientas de gestión que necesitas.</p>
      </div>
    </section>

    <section className="servicios">
      <div className="wrap">
        <div className="cards-servicios">
          <article className="card-servicio">
            <h3>Cuenta Independiente</h3>
            <p className="precio">Sin costo de mantenimiento</p>
            <p>Para quien emite recibos por honorarios y factura de forma irregular durante el mes.</p>
            <ul>
              <li>Hasta 30 operaciones gratuitas al mes</li>
              <li>Alertas de pago por SMS y app</li>
              <li>Retención automática de impuesto a la renta</li>
            </ul>
            <Link to="/registro" className="btn btn-outline btn-block">Elegir esta cuenta</Link>
          </article>

          <article className="card-servicio card-servicio--destacada">
            <p className="etiqueta-destacada">La más solicitada</p>
            <h3>Cuenta Mype Emprende</h3>
            <p className="precio">S/ 12 al mes</p>
            <p>Para negocios que recién formalizan operaciones y necesitan ordenar cobros y pagos.</p>
            <ul>
              <li>Operaciones ilimitadas</li>
              <li>Link de pago para cobrar con tarjeta o Yape/Plin</li>
              <li>Reporte mensual de movimientos en PDF</li>
            </ul>
            <Link to="/registro" className="btn btn-acento btn-block">Elegir esta cuenta</Link>
          </article>

          <article className="card-servicio">
            <h3>Cuenta Mype Crece</h3>
            <p className="precio">S/ 25 al mes</p>
            <p>Para negocios con planilla, proveedores fijos y necesidad de líneas de crédito.</p>
            <ul>
              <li>Pago masivo a proveedores y planilla</li>
              <li>Acceso preferente a línea de capital de trabajo</li>
              <li>Ejecutivo de cuenta asignado</li>
            </ul>
            <Link to="/registro" className="btn btn-outline btn-block">Elegir esta cuenta</Link>
          </article>
        </div>
      </div>
    </section>

    <section className="comparativo">
      <div className="wrap">
        <h2>Comparación rápida</h2>
        <table className="tabla-comparativa">
          <thead>
            <tr>
              <th scope="col">Beneficio</th>
              <th scope="col">Independiente</th>
              <th scope="col">Mype Emprende</th>
              <th scope="col">Mype Crece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Costo mensual</th>
              <td>S/ 0</td>
              <td>S/ 12</td>
              <td>S/ 25</td>
            </tr>
            <tr>
              <th scope="row">Operaciones gratuitas</th>
              <td>30 al mes</td>
              <td>Ilimitadas</td>
              <td>Ilimitadas</td>
            </tr>
            <tr>
              <th scope="row">Link de pago</th>
              <td>No</td>
              <td>Sí</td>
              <td>Sí</td>
            </tr>
            <tr>
              <th scope="row">Pago masivo a proveedores</th>
              <td>No</td>
              <td>No</td>
              <td>Sí</td>
            </tr>
            <tr>
              <th scope="row">Ejecutivo asignado</th>
              <td>No</td>
              <td>No</td>
              <td>Sí</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <ListaProductos />

    <section className="cta-final">
      <div className="wrap cta-final-inner">
        <div>
          <h2>¿Ya sabes cuál te conviene?</h2>
          <p>Completa el formulario de apertura y un asesor te contacta en menos de un día útil.</p>
        </div>
        <Link to="/registro" className="btn btn-acento">Abrir mi cuenta</Link>
      </div>
    </section>

      </main>
  );
}
