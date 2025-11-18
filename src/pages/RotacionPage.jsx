import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const RotacionPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Rotación</h1>
        <p>Animaciones de giro continuo y efectos de rotación para elementos dinámicos.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="rotate360"
        description="Rotación continua completa. Giro constante de 360 grados."
        cssCode={`@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate-360 {
  animation: rotate360 3s linear infinite;
}`}
        jsxCode={`<div className="loading-icon rotate-360">
  ⚙️
</div>

<div className="spinner rotate-360">
  <div className="spinner-border"></div>
</div>`}
        preview={
          <div className="preview-box rotate-360-demo">
            <p style={{fontSize: '4rem', margin: 0}}>⚙️</p>
          </div>
        }
        useCases={[
          'Iconos de carga y spinners',
          'Engranajes y elementos mecánicos',
          'Decoraciones giratorias',
          'Indicadores de procesamiento',
          'Elementos decorativos en movimiento'
        ]}
        tips={[
          'Usa linear para velocidad constante',
          'Duración de 2-4s según velocidad deseada',
          'Perfecto para indicadores de carga',
          'Combina con scale para efectos más complejos'
        ]}
      />

      <AnimationDemo
        title="spin"
        description="Giro rápido. Rotación más veloz para elementos pequeños."
        cssCode={`@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 2s linear infinite;
}`}
        jsxCode={`<div className="refresh-button spin">
  🔄
</div>

<div className="loading-dots">
  <span className="dot spin"></span>
</div>`}
        preview={
          <div className="preview-box spin-demo">
            <p style={{fontSize: '3.5rem', margin: 0}}>🔄</p>
          </div>
        }
        useCases={[
          'Botones de refresh/actualizar',
          'Iconos de sincronización',
          'Indicadores de actividad',
          'Elementos de carga compactos',
          'Iconos de configuración activa'
        ]}
        tips={[
          'Duración de 1-2s para giro rápido',
          'Ideal para elementos pequeños (iconos)',
          'Usa cuando necesites indicar proceso activo',
          'Detén la animación cuando el proceso termine'
        ]}
      />

      <AnimationDemo
        title="flip"
        description="Volteo 3D. Efecto de tarjeta que se da vuelta."
        cssCode={`@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.flip {
  animation: flip 2s ease-in-out infinite;
  transform-style: preserve-3d;
}`}
        jsxCode={`<div className="card flip">
  <div className="card-front">
    <h3>Frente</h3>
  </div>
  <div className="card-back">
    <h3>Reverso</h3>
  </div>
</div>`}
        preview={
          <div className="preview-box">
            <div style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              animation: 'flip 3s ease-in-out infinite',
              transformStyle: 'preserve-3d'
            }}>
              FLIP
            </div>
          </div>
        }
        useCases={[
          'Tarjetas con dos caras (front/back)',
          'Revelación de información oculta',
          'Transiciones entre estados',
          'Efectos de hover interactivos',
          'Galerías con información adicional'
        ]}
        tips={[
          'Usa preserve-3d para efecto 3D real',
          'Combina con backface-visibility: hidden',
          'Perfecto para mostrar/ocultar contenido',
          'Ajusta el eje (rotateX, rotateY, rotateZ)'
        ]}
      />
    </div>
  );
};

export default RotacionPage;
