import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <main>


    <section className="hero">
      <svg className="chispa chispa--1" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12 7 17 12 24 12 17 12 12 17 12 24 12 17 7 12 0 12 7 12 12 7 12 0Z"/></svg>
      <svg className="chispa chispa--2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12 7 17 12 24 12 17 12 12 17 12 24 12 17 7 12 0 12 7 12 12 7 12 0Z"/></svg>
      <svg className="chispa chispa--3" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12 7 17 12 24 12 17 12 12 17 12 24 12 17 7 12 0 12 7 12 12 7 12 0Z"/></svg>
      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">Banca comercial para independientes y mypes</p>
          <h1>Tu negocio genera movimiento todos los días. Tu cuenta debería <span className="hero-destacado">seguirle el ritmo.</span></h1>
          <p className="hero-lead">Abre una cuenta desde tu celular en menos de diez minutos, sin ir a una agencia y sin colas. Diseñada para quien factura, cobra y paga proveedores fuera de un horario de oficina.</p>
          <div className="hero-actions">
            <Link to="/registro" className="btn btn-acento">Abrir mi cuenta online</Link>
            <Link to="/servicios" className="btn btn-outline btn-outline-claro">Ver tipos de cuenta</Link>
          </div>
          <ul className="hero-puntos">
            <li><span className="hero-punto-num">01</span><strong>Apertura online</strong><span>Solicita tu cuenta desde el celular, sin colas.</span></li>
            <li><span className="hero-punto-num">02</span><strong>Cobra fácil</strong><span>Link de pago para recibir a tus clientes.</span></li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-carrusel" role="region" aria-roledescription="carrusel" aria-label="Destacados de Banco Andino">
            <figure className="carrusel-slide is-activo">
              <img src="/img/carrucel2.avif" alt="Mujer sonriendo mientras revisa su cuenta en el celular, junto a una alcancía" width="768" height="428" fetchPriority="high" />
              <figcaption>
                <span className="carrusel-etiqueta">100% online</span>
                <span className="carrusel-titulo">Abre tu cuenta desde el celular</span>
                <p className="carrusel-texto">En menos de diez minutos y sin ir a una agencia.</p>
              </figcaption>
            </figure>
            <figure className="carrusel-slide carrusel-slide--sofa">
              <img src="/img/carrusel-sofa.webp" alt="Joven recostado en el sofá revisando su cuenta en el celular" width="1400" height="933" loading="lazy" />
              <figcaption>
                <span className="carrusel-etiqueta">Banca por Internet</span>
                <span className="carrusel-titulo">Tu banco, donde estés</span>
                <p className="carrusel-texto">Consulta y gestiona tu cuenta con total comodidad.</p>
              </figcaption>
            </figure>
            <figure className="carrusel-slide carrusel-slide--pareja">
              <img src="/img/carrusel-pareja.webp" alt="Pareja celebrando mientras mira el celular, con billetes en la mano y confeti azul" width="1400" height="1261" loading="lazy" />
              <figcaption>
                <span className="carrusel-etiqueta">Tu dinero</span>
                <span className="carrusel-titulo">Controla tus ingresos desde el celular</span>
                <p className="carrusel-texto">Cobra, ahorra y paga en un solo lugar.</p>
              </figcaption>
            </figure>
            <figure className="carrusel-slide carrusel-slide--ilustracion">
              <img src="/img/carrucel3.avif" alt="Ilustración de una persona con su celular dentro de un aro azul, junto a una pila de monedas" width="768" height="768" loading="lazy" />
              <figcaption>
                <span className="carrusel-etiqueta">Sin costos</span>
                <span className="carrusel-titulo">Sin mantenimiento el primer año</span>
                <p className="carrusel-texto">Ahorra desde tu primer día con nosotros.</p>
              </figcaption>
            </figure>
            <figure className="carrusel-slide carrusel-slide--promo">
              <figcaption>
                <span className="carrusel-etiqueta">Para tu negocio</span>
                <span className="carrusel-titulo">Cobra con link de pago</span>
                <p className="carrusel-texto">Recibe pagos de tus clientes sin necesitar un POS.</p>
              </figcaption>
              <svg viewBox="0 0 120 120" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M50 70a20 20 0 0 0 28 0l18-18a20 20 0 0 0-28-28l-8 8"/>
                <path d="M70 50a20 20 0 0 0-28 0L24 68a20 20 0 0 0 28 28l8-8"/>
              </svg>
            </figure>
            <button className="carrusel-flecha carrusel-flecha--ant" type="button" aria-label="Diapositiva anterior">‹</button>
            <button className="carrusel-flecha carrusel-flecha--sig" type="button" aria-label="Diapositiva siguiente">›</button>
            <div className="hero-carrusel-dots"></div>
            <button className="hero-carrusel-pausa" type="button" aria-label="Pausar carrusel">⏸</button>
          </div>

          <div className="hero-sello" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs><path id="sello-circulo" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0"/></defs>
              <text><textPath href="#sello-circulo" textLength="268" lengthAdjust="spacing">BANCA PARA INDEPENDIENTES Y MYPES ·</textPath></text>
            </svg>
            <span className="hero-sello-centro">»</span>
          </div>
          <div className="hero-chip">
            <span className="hero-chip-num">10 min</span>
            <span className="hero-chip-texto">Apertura<br />100% online</span>
          </div>
        </div>
      </div>
    </section>

    <section className="accesos-rapidos">
      <div className="wrap accesos-rapidos-inner">
        <div className="accesos-lista">
          <h2>¿Qué necesitas hacer hoy?</h2>
          <div className="grid-accesos">
            <Link to="/registro" className="acceso">
              <span className="acceso-badge">Nuevo</span>
              <span className="acceso-icono" aria-hidden="true">＋</span>
              <span>Abrir una cuenta</span>
            </Link>
            <Link to="/servicios" className="acceso">
              <span className="acceso-badge">Popular</span>
              <span className="acceso-icono" aria-hidden="true">🔗</span>
              <span>Cobrar con link de pago</span>
            </Link>
            <Link to="/como-funciona" className="acceso">
              <span className="acceso-icono" aria-hidden="true">🧾</span>
              <span>Pagar a proveedores</span>
            </Link>
            <Link to="/contacto" className="acceso">
              <span className="acceso-icono" aria-hidden="true">📊</span>
              <span>Ver mis comisiones</span>
            </Link>
            <Link to="/servicios" className="acceso">
              <span className="acceso-badge">Promo</span>
              <span className="acceso-icono" aria-hidden="true">💳</span>
              <span>Solicitar línea de capital</span>
            </Link>
            <Link to="/contacto" className="acceso">
              <span className="acceso-icono" aria-hidden="true">🛡</span>
              <span>Proteger mi cuenta</span>
            </Link>
            <Link to="/servicios" className="acceso">
              <span className="acceso-icono" aria-hidden="true">★</span>
              <span>Ver mis beneficios</span>
            </Link>
            <Link to="/contacto" className="acceso">
              <span className="acceso-icono" aria-hidden="true">?</span>
              <span>Ir a Ayuda Rápida</span>
            </Link>
          </div>
        </div>

        <aside className="widget-calificacion">
          <p className="widget-etiqueta">Mi Espacio Andino</p>
          <h3>¿Calificas para apertura preferencial?</h3>
          <ul className="widget-check">
            <li>Solo con tu número de documento</li>
            <li>Para independientes y mypes, seas o no cliente</li>
          </ul>
          <form className="widget-form" id="form-calificacion" action="/registro" method="get" noValidate>
            <label htmlFor="widget-tipo-doc" className="visualmente-oculto">Tipo de documento</label>
            <select id="widget-tipo-doc" name="widget-tipo-doc">
              <option value="dni">DNI</option>
              <option value="ruc">RUC</option>
            </select>
            <label htmlFor="widget-doc" className="visualmente-oculto">Número de documento</label>
            <input type="text" id="widget-doc" name="documento" placeholder="Nro. de documento" required pattern="[0-9]&#123;8&#125;([0-9]&#123;3&#125;)?" title="Ingresa un DNI de 8 dígitos o un RUC de 11 dígitos" />
            <button type="submit" className="btn btn-acento">Conocer</button>
          </form>
          <p className="widget-legal">Tu documento se usará únicamente para verificar si calificas para la apertura preferencial.</p>
        </aside>
      </div>
    </section>

    <section className="teaser-servicios">
      <div className="wrap">
        <h2>Tres formas de tener tu cuenta con nosotros</h2>
        <p className="section-lead">Revisa el detalle de comisiones y beneficios en la página de cuentas.</p>
        <div className="cards-servicios">
          <article className="card-servicio">
            <h3>Cuenta Independiente</h3>
            <p className="precio">Sin costo de mantenimiento</p>
            <p>Para quien emite recibos por honorarios y factura de forma irregular.</p>
          </article>
          <article className="card-servicio card-servicio--destacada">
            <p className="etiqueta-destacada">La más solicitada</p>
            <h3>Cuenta Mype Emprende</h3>
            <p className="precio">S/ 12 al mes</p>
            <p>Para negocios que recién formalizan sus operaciones.</p>
          </article>
          <article className="card-servicio">
            <h3>Cuenta Mype Crece</h3>
            <p className="precio">S/ 25 al mes</p>
            <p>Para negocios con planilla y proveedores fijos.</p>
          </article>
        </div>
        <Link to="/servicios" className="btn btn-outline" style={{ marginTop: 28 }}>Ver todas las cuentas y comparar beneficios</Link>
      </div>
    </section>

  
    </main>
  );
}
