import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const HoverPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Hover e Interacción</h1>
        <p>Animaciones que responden a la interacción del usuario para feedback visual inmediato.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="scaleOnHover"
        description="Crecimiento al pasar el mouse. Feedback visual simple y efectivo."
        cssCode={`.scale-on-hover {
  transition: transform 0.3s ease;
}

.scale-on-hover:hover {
  transform: scale(1.05);
}`}
        jsxCode={`<div className="card scale-on-hover">
  <img src="product.jpg" alt="Product" />
  <h3>Producto Destacado</h3>
</div>

<button className="scale-on-hover">
  Ver más
</button>`}
        preview={
          <div className="preview-box">
            <div style={{
              padding: '1.5rem',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              animation: 'scaleHoverDemo 2s ease-in-out infinite'
            }}>
              <h3 style={{margin: '0 0 0.5rem', color: '#2c3e50'}}>📦 Producto</h3>
              <p style={{margin: 0, color: '#5a6c7d'}}>Hover me!</p>
            </div>
            <style>{`
              @keyframes scaleHoverDemo {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Tarjetas de productos o servicios',
          'Botones interactivos',
          'Imágenes en galerías',
          'Cards clickeables',
          'Elementos de navegación'
        ]}
        tips={[
          'Scale de 1.03-1.08 para efecto sutil',
          'Usa transition en lugar de animation',
          'Añade cursor: pointer para indicar interactividad',
          'Combina con box-shadow para profundidad'
        ]}
      />

      <AnimationDemo
        title="liftUp"
        description="Elevación con sombra. Efecto de levantamiento 3D al hacer hover."
        cssCode={`.lift-up {
  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.lift-up:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}`}
        jsxCode={`<div className="product-card lift-up">
  <img src="item.jpg" alt="Item" />
  <h3>Título del Producto</h3>
  <p>$99.99</p>
</div>`}
        preview={
          <div className="preview-box">
            <div style={{
              padding: '1.5rem',
              background: '#fff',
              borderRadius: '12px',
              cursor: 'pointer',
              animation: 'liftUpDemo 2s ease-in-out infinite'
            }}>
              <div style={{fontSize: '3rem', margin: '0 0 0.5rem'}}>🎁</div>
              <h3 style={{margin: '0 0 0.5rem', color: '#2c3e50'}}>Producto</h3>
              <p style={{margin: 0, color: '#667eea', fontWeight: 'bold'}}>$49.99</p>
            </div>
            <style>{`
              @keyframes liftUpDemo {
                0%, 100% {
                  transform: translateY(0);
                  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                50% {
                  transform: translateY(-10px);
                  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Cards de productos en e-commerce',
          'Tarjetas de servicios',
          'Elementos de portfolio',
          'Grids de contenido',
          'Botones importantes'
        ]}
        tips={[
          'translateY negativo para "levantar"',
          'Aumenta box-shadow al elevar',
          'Transición suave de 0.3s',
          'Crea sensación de profundidad real'
        ]}
      />

      <AnimationDemo
        title="tilt3D"
        description="Inclinación 3D. Efecto de perspectiva que sigue el mouse."
        cssCode={`.tilt-3d {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.tilt-3d:hover {
  transform: 
    perspective(1000px)
    rotateX(10deg)
    rotateY(10deg);
}`}
        jsxCode={`// Con JavaScript para seguir el mouse
<div className="card tilt-3d"
     onMouseMove={handleMouseMove}>
  <h3>Tarjeta Interactiva</h3>
</div>

// Versión simple CSS-only
<div className="card tilt-3d">
  Contenido
</div>`}
        preview={
          <div className="preview-box">
            <div style={{
              width: '200px',
              height: '200px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              transformStyle: 'preserve-3d',
              animation: 'tilt3DDemo 4s ease-in-out infinite'
            }}>
              3D CARD
            </div>
            <style>{`
              @keyframes tilt3DDemo {
                0%, 100% {
                  transform: perspective(1000px) rotateX(0) rotateY(0);
                }
                25% {
                  transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
                }
                75% {
                  transform: perspective(1000px) rotateX(-10deg) rotateY(-10deg);
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Tarjetas modernas y destacadas',
          'Productos premium',
          'Portfolios creativos',
          'Landing pages innovadoras',
          'Elementos hero interactivos'
        ]}
        tips={[
          'preserve-3d es esencial para el efecto',
          'Usa JavaScript para seguir el cursor',
          'Valores de rotación sutiles (5-15deg)',
          'Combina con sombras dinámicas para realismo'
        ]}
      />

      <AnimationDemo
        title="underlineExpand"
        description="Línea que se expande. Subrayado animado para links y navegación."
        cssCode={`.underline-expand {
  position: relative;
  text-decoration: none;
}

.underline-expand::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.underline-expand:hover::after {
  width: 100%;
}`}
        jsxCode={`<nav>
  <a href="#" className="underline-expand">
    Inicio
  </a>
  <a href="#" className="underline-expand">
    Servicios
  </a>
  <a href="#" className="underline-expand">
    Contacto
  </a>
</nav>`}
        preview={
          <div className="preview-box">
            <div style={{
              display: 'inline-block',
              position: 'relative',
              fontSize: '1.5rem',
              color: '#667eea',
              fontWeight: '600',
              padding: '0.5rem 0'
            }}>
              Hover Link
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '3px',
                background: '#667eea',
                animation: 'underlineExpandDemo 2s ease-in-out infinite'
              }}></div>
            </div>
            <style>{`
              @keyframes underlineExpandDemo {
                0%, 100% { width: 0; }
                50%, 70% { width: 100%; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Links en menús de navegación',
          'Enlaces en textos',
          'Botones tipo texto',
          'Tabs y pestañas',
          'Footer links'
        ]}
        tips={[
          'Usa ::after o ::before para el subrayado',
          'transition en width para suavidad',
          'height de 2-3px para visibilidad',
          'Combina con color que contraste'
        ]}
      />
    </div>
  );
};

export default HoverPage;
