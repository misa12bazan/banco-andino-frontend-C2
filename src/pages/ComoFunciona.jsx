import { Link } from 'react-router-dom';

export default function ComoFunciona() {
  return (
    <main>


    <section className="hero-pagina">
      <div className="wrap">
        <p className="hero-kicker">Cómo funciona</p>
        <h1>Cómo abrir tu cuenta y qué necesitas tener a la mano</h1>
        <p className="hero-lead-pagina">Todo el proceso se hace desde tu celular. Aquí te explicamos cada paso y los requisitos según tu situación.</p>
      </div>
    </section>

    <section className="proceso">
      <div className="wrap">
        <h2>Cómo abrir tu cuenta</h2>
        <ol className="pasos">
          <li>
            <span className="paso-numero">1</span>
            <div>
              <h3>Completa el formulario</h3>
              <p>Ingresa tus datos personales o de tu negocio y elige el tipo de cuenta.</p>
            </div>
          </li>
          <li>
            <span className="paso-numero">2</span>
            <div>
              <h3>Valida tu identidad</h3>
              <p>Te enviamos un enlace para validar tu DNI o RUC con una foto y una selfie.</p>
            </div>
          </li>
          <li>
            <span className="paso-numero">3</span>
            <div>
              <h3>Firma tu contrato</h3>
              <p>Firma digitalmente desde tu celular, sin imprimir ni acercarte a una agencia.</p>
            </div>
          </li>
          <li>
            <span className="paso-numero">4</span>
            <div>
              <h3>Empieza a operar</h3>
              <p>Tu cuenta queda activa de inmediato y tu tarjeta llega a tu domicilio en 3 días útiles.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section className="requisitos">
      <div className="wrap requisitos-inner">
        <div>
          <h2>Requisitos según tu situación</h2>
          <div className="requisito-bloque">
            <h3>Si trabajas de forma independiente</h3>
            <ul>
              <li>DNI vigente</li>
              <li>Recibo por honorarios reciente (opcional)</li>
              <li>Correo electrónico y número de celular activos</li>
            </ul>
          </div>
          <div className="requisito-bloque">
            <h3>Si tienes una mype</h3>
            <ul>
              <li>DNI del titular o representante legal</li>
              <li>RUC activo y habido en Sunat</li>
              <li>Vigencia de poder no mayor a 3 meses (personas jurídicas)</li>
            </ul>
          </div>
        </div>
        <aside className="nota-lateral">
          <h3>¿Tienes dudas sobre qué cuenta elegir?</h3>
          <p>Escríbenos y un asesor te ayuda a comparar comisiones y beneficios antes de que decidas abrir tu cuenta.</p>
          <Link to="/contacto" className="btn btn-acento btn-block">Hablar con un asesor</Link>
        </aside>
      </div>
    </section>

    <section className="cta-final">
      <div className="wrap cta-final-inner">
        <div>
          <h2>¿Ya tienes todo listo?</h2>
          <p>Completa el formulario y empieza el proceso de apertura hoy mismo.</p>
        </div>
        <Link to="/registro" className="btn btn-acento">Ir al formulario</Link>
      </div>
    </section>

  
    </main>
  );
}
