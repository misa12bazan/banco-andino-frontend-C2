import { Link } from 'react-router-dom';

export default function Contacto() {
  return (
    <main>


    <section className="hero-pagina">
      <div className="wrap">
        <p className="hero-kicker">Ubicación y contacto</p>
        <h1>Canales de atención para independientes y mypes</h1>
        <p className="hero-lead-pagina">Puedes resolver la mayoría de trámites por app o por teléfono. Si prefieres ir a una agencia, esta es la más cercana a Lima Centro.</p>
      </div>
    </section>

    <section className="contacto-detalle">
      <div className="wrap contacto-detalle-inner">

        <div className="tarjeta-contacto">
          <h3>Central de atención</h3>
          <p>01 619 0000</p>
          <p>Lunes a sábado, 8:00 a. m. – 8:00 p. m.</p>
        </div>

        <div className="tarjeta-contacto">
          <h3>Correo para consultas y reclamos</h3>
          <p><a href="mailto:hola@bancoandino.pe">hola@bancoandino.pe</a></p>
          <p>Respuesta en un máximo de 2 días útiles.</p>
        </div>

        <div className="tarjeta-contacto">
          <h3>Agencia Lima Centro</h3>
          <p>Jr. de la Unión 500, Cercado de Lima</p>
          <p>Lunes a viernes, 9:00 a. m. – 6:00 p. m.</p>
        </div>

        <div className="tarjeta-contacto">
          <h3>Banca móvil</h3>
          <p>Disponible las 24 horas para consultas de saldo, transferencias y reclamos.</p>
          <p>App Banco Andino Perú (referencial para este proyecto académico)</p>
        </div>

      </div>

      <div className="wrap">
        <div className="mapa-referencial" role="img" aria-label="Mapa referencial de la ubicación de la agencia Lima Centro">
          <p>Mapa referencial — Jr. de la Unión 500, Cercado de Lima</p>
        </div>
      </div>
    </section>

    <section className="reclamos">
      <div className="wrap reclamos-inner">
        <div>
          <h2>¿Tienes un reclamo sobre tu cuenta?</h2>
          <p>Puedes registrar tu reclamo por cualquiera de los canales anteriores. Ten a la mano tu número de cuenta o el DNI/RUC con el que la abriste, y una breve descripción de lo ocurrido.</p>
        </div>
        <a href="mailto:hola@bancoandino.pe?subject=Reclamo%20sobre%20mi%20cuenta" className="btn btn-acento">Enviar un reclamo por correo</a>
      </div>
    </section>

  
    </main>
  );
}
