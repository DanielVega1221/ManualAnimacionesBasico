import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const FlotacionPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Flotación</h1>
        <p>Animaciones que simulan movimiento flotante y crean sensación de ligereza.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="float"
        description="Flotación estándar vertical. Movimiento suave arriba y abajo."
        cssCode={`@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}`}
        jsxCode={`<div className="icon float">
  🎈
</div>

<img src="cloud.png" 
     className="float" 
     alt="Floating cloud" />`}
        preview={
          <div className="preview-box float-demo">
            <p style={{fontSize: '4rem', margin: 0}}>🎈</p>
          </div>
        }
        useCases={[
          'Iconos y elementos decorativos',
          'Imágenes que necesitan dinamismo',
          'Elementos hero en landing pages',
          'Decoraciones de fondo',
          'Badges y etiquetas flotantes'
        ]}
        tips={[
          'Usa translateY de 15-25px para movimiento moderado',
          'Duración de 2.5-3.5s para flotación natural',
          'ease-in-out crea movimiento más orgánico',
          'Combina con rotation sutil para más realismo'
        ]}
      />

      <AnimationDemo
        title="floatSlow"
        description="Flotación lenta y amplia. Movimiento más pronunciado y relajado."
        cssCode={`@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

.float-slow {
  animation: floatSlow 4s ease-in-out infinite;
}`}
        jsxCode={`<div className="hero-background float-slow">
  <img src="background-element.png" alt="" />
</div>

<div className="large-image float-slow">
  <img src="product.jpg" alt="Product" />
</div>`}
        preview={
          <div className="preview-box float-slow-demo">
            <div style={{width: '150px', height: '150px', background: 'rgba(118, 75, 162, 0.5)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem'}}>
              ☁️
            </div>
          </div>
        }
        useCases={[
          'Elementos hero grandes',
          'Backgrounds decorativos',
          'Imágenes destacadas de gran tamaño',
          'Secciones completas con movimiento sutil',
          'Overlays y capas decorativas'
        ]}
        tips={[
          'translateY de 25-40px para movimiento amplio',
          'Duración de 3.5-5s para flotación relajada',
          'Ideal para elementos grandes que no deben molestar',
          'Combina con parallax para efecto más rico'
        ]}
      />

      <AnimationDemo
        title="floatDots"
        description="Flotación media para elementos pequeños. Equilibrio entre movimiento y sutileza."
        cssCode={`@keyframes floatDots {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.float-dots {
  animation: floatDots 2.5s ease-in-out infinite;
}`}
        jsxCode={`<div className="decorative-dots">
  <span className="dot float-dots">⚫</span>
  <span className="dot float-dots" 
        style={{animationDelay: '0.3s'}}>⚫</span>
  <span className="dot float-dots" 
        style={{animationDelay: '0.6s'}}>⚫</span>
</div>`}
        preview={
          <div className="preview-box">
            <div style={{display: 'flex', gap: '2rem', fontSize: '2rem'}}>
              <span className="float-dots">⚫</span>
              <span className="float-dots" style={{animationDelay: '0.3s'}}>⚫</span>
              <span className="float-dots" style={{animationDelay: '0.6s'}}>⚫</span>
            </div>
          </div>
        }
        useCases={[
          'Puntos decorativos en backgrounds',
          'Elementos pequeños en diseños',
          'Patrones decorativos',
          'Separadores visuales animados',
          'Grupos de iconos pequeños'
        ]}
        tips={[
          'Usa animation-delay para crear ondas',
          'translateY de 10-20px para elementos pequeños',
          'Perfecto para patrones repetitivos',
          'Combina múltiples elementos para efecto de grupo'
        ]}
      />

      <AnimationDemo
        title="boltFloat"
        description="Flotación con inclinación. Movimiento diagonal que simula vuelo."
        cssCode={`@keyframes boltFloat {
  0%, 100% {
    transform: translateY(0) rotate(-10deg);
  }
  50% {
    transform: translateY(-25px) rotate(10deg);
  }
}

.bolt-float {
  animation: boltFloat 3s ease-in-out infinite;
}`}
        jsxCode={`<div className="bolt-icon bolt-float">
  ⚡
</div>

<div className="error-404">
  <div className="bolt bolt-float">⚡</div>
  <h1>404</h1>
</div>`}
        preview={
          <div className="preview-box bolt-float-demo">
            <p style={{fontSize: '5rem', margin: 0}}>⚡</p>
          </div>
        }
        useCases={[
          'Rayos en página 404',
          'Elementos temáticos eléctricos',
          'Iconos con personalidad',
          'Decoraciones con movimiento único',
          'Efectos especiales y temáticos'
        ]}
        tips={[
          'La rotación añade dinamismo extra',
          'Alterna entre valores de rotate positivos y negativos',
          'Perfecto para elementos con forma asimétrica',
          'Usa con elementos que tengan sentido de dirección'
        ]}
      />
    </div>
  );
};

export default FlotacionPage;
