import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">
          Manual Completo de Animaciones CSS
        </h1>
        <p className="hero-subtitle">
          Para nuestros UXnicornios de UXnicorp
        </p>
        <p className="hero-subtitle" style={{fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9}}>
          Aprende a crear animaciones profesionales para tus proyectos web
        </p>
      </div>

      <div className="intro-content">
        <section className="intro-section">
          <h2>Bienvenidos UXnicornios</h2>
          <p>
            Este es un manual interactivo diseñado especialmente para el equipo de <strong>UXnicorp</strong> 
            para ayudarte a dominar las animaciones en CSS y React. Aquí encontrarás ejemplos prácticos, 
            código listo para copiar y recomendaciones de dónde aplicar cada animación en tus proyectos.
          </p>
        </section>

        <section className="intro-section">
          <h2>¿Qué vas a aprender?</h2>
          <ul className="features-list">
            <li>
              <strong>13 categorías de animaciones</strong> organizadas por tipo de efecto
            </li>
            <li>
              <strong>Ejemplos visuales interactivos</strong> con controles de reproducción
            </li>
            <li>
              <strong>Código CSS y JSX</strong> listo para copiar en tus proyectos
            </li>
            <li>
              <strong>Recomendaciones prácticas</strong> de dónde y cuándo usar cada animación
            </li>
            <li>
              <strong>Tips profesionales</strong> para crear animaciones atractivas y fluidas
            </li>
          </ul>
        </section>

        <section className="intro-section">
          <h2>Categorías Disponibles</h2>
          <div className="categories-grid">
            <Link to="/entrada" className="category-card">
              <span className="category-icon">🎬</span>
              <h3>Entrada/Aparición</h3>
              <p>fadeIn, fadeInUp, scaleIn, slideUp</p>
            </Link>
            <Link to="/salida" className="category-card">
              <span className="category-icon">🚪</span>
              <h3>Salida/Desaparición</h3>
              <p>fadeOut, slideOut, zoomOut</p>
            </Link>
            <Link to="/brillo" className="category-card">
              <span className="category-icon">✨</span>
              <h3>Brillo y Destello</h3>
              <p>shimmer, sparkle, glowPulse</p>
            </Link>
            <Link to="/pulsacion" className="category-card">
              <span className="category-icon">💓</span>
              <h3>Pulsación</h3>
              <p>pulse, pulseSubtle, scrollPulse</p>
            </Link>
            <Link to="/flotacion" className="category-card">
              <span className="category-icon">🎈</span>
              <h3>Flotación</h3>
              <p>float, floatSlow, boltFloat</p>
            </Link>
            <Link to="/rotacion" className="category-card">
              <span className="category-icon">🔄</span>
              <h3>Rotación</h3>
              <p>rotate360, spin, flip</p>
            </Link>
            <Link to="/rebote" className="category-card">
              <span className="category-icon">🎾</span>
              <h3>Rebote</h3>
              <p>bounce, bounceIn, rubberBand</p>
            </Link>
            <Link to="/sacudida" className="category-card">
              <span className="category-icon">📳</span>
              <h3>Sacudida</h3>
              <p>shake, wobble, headShake</p>
            </Link>
            <Link to="/texto" className="category-card">
              <span className="category-icon">📝</span>
              <h3>Texto</h3>
              <p>typewriter, textGlow, gradientShift</p>
            </Link>
            <Link to="/hover" className="category-card">
              <span className="category-icon">👆</span>
              <h3>Hover</h3>
              <p>scaleOnHover, liftUp, tilt3D</p>
            </Link>
            <Link to="/fondo" className="category-card">
              <span className="category-icon">🌊</span>
              <h3>Fondo</h3>
              <p>gradientMove, wave, parallax</p>
            </Link>
            <Link to="/carga" className="category-card">
              <span className="category-icon">⏳</span>
              <h3>Carga</h3>
              <p>skeleton, progressBar, spinner</p>
            </Link>
            <Link to="/especiales" className="category-card">
              <span className="category-icon">🎨</span>
              <h3>Especiales</h3>
              <p>glitch, neon, morphing</p>
            </Link>
          </div>
        </section>

        <section className="intro-section cta-section">
          <h2>Comienza a Explorar</h2>
          <p>
            Usa el menú de la izquierda para navegar entre las diferentes categorías. 
            Cada página incluye ejemplos interactivos que puedes pausar, ajustar la 
            velocidad y copiar el código directamente.
          </p>
          <p className="tip-highlight">
            <strong>Tip para UXnicornios:</strong> Intenta combinar diferentes animaciones para 
            crear efectos únicos en los proyectos de UXnicorp. La creatividad es tu superpoder.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
