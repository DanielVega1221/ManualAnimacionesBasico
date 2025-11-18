import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const PulsacionPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Pulsación</h1>
        <p>Animaciones rítmicas que crean sensación de vida y movimiento constante.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="pulse"
        description="Pulsación estándar con escala. Efecto de latido suave y constante."
        cssCode={`@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}`}
        jsxCode={`<button className="pulse">
  Haz clic aquí
</button>

<div className="whatsapp-button pulse">
  📱 Contactar
</div>`}
        preview={
          <div className="preview-box pulse-demo">
            <button style={{padding: '1rem 2rem', fontSize: '1.1rem', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>
              💬 Click Aquí
            </button>
          </div>
        }
        useCases={[
          'Botones de llamada a la acción (CTA)',
          'Iconos interactivos y clicables',
          'Botones de WhatsApp o contacto',
          'Elementos que requieren interacción',
          'Indicadores de estado activo'
        ]}
        tips={[
          'Scale de 1.03-1.08 para efecto sutil',
          'Duración de 1-2s para ritmo relajado',
          'Combina con box-shadow para efecto más pronunciado',
          'No uses en demasiados elementos a la vez'
        ]}
      />

      <AnimationDemo
        title="pulseSubtle"
        description="Pulsación muy sutil. Efecto casi imperceptible para fondos y decoración."
        cssCode={`@keyframes pulseSubtle {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.02);
    opacity: 1;
  }
}

.pulse-subtle {
  animation: pulseSubtle 3s ease-in-out infinite;
}`}
        jsxCode={`<div className="background-decoration pulse-subtle">
  <div className="decorative-shape"></div>
</div>`}
        preview={
          <div className="preview-box pulse-subtle-demo">
            <div style={{width: '100px', height: '100px', background: 'rgba(102, 126, 234, 0.3)', borderRadius: '50%'}}></div>
          </div>
        }
        useCases={[
          'Elementos decorativos de fondo',
          'Formas geométricas sutiles',
          'Backgrounds con movimiento ligero',
          'Overlays y capas decorativas',
          'Elementos que no deben distraer'
        ]}
        tips={[
          'Scale muy pequeño (1.01-1.03)',
          'Duración larga (2.5-4s) para suavidad',
          'Combina con cambios sutiles de opacidad',
          'Perfecto para añadir vida sin ser invasivo'
        ]}
      />

      <AnimationDemo
        title="heartBeat"
        description="Latido de corazón. Efecto de pulsación doble característico."
        cssCode={`@keyframes heartBeat {
  0%, 100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

.heart-beat {
  animation: heartBeat 1.3s ease-in-out infinite;
}`}
        jsxCode={`<button className="like-button heart-beat">
  ❤️ Me gusta
</button>

<div className="favorite-icon heart-beat">
  💖
</div>`}
        preview={
          <div className="preview-box heart-beat-demo">
            <p style={{fontSize: '4rem', margin: 0}}>❤️</p>
          </div>
        }
        useCases={[
          'Botones de "like" o favoritos',
          'Iconos de corazón',
          'Notificaciones de amor o aprecio',
          'Elementos relacionados con salud',
          'Gamificación y recompensas'
        ]}
        tips={[
          'La doble pulsación simula un latido real',
          'Usa con iconos de corazón para máximo efecto',
          'Duración de 1.2-1.5s para ritmo natural',
          'Perfecto para feedback de interacción'
        ]}
      />

      <AnimationDemo
        title="scrollPulse"
        description="Pulsación con movimiento vertical. Indica que hay más contenido abajo."
        cssCode={`@keyframes scrollPulse {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.5;
  }
}

.scroll-pulse {
  animation: scrollPulse 2s ease-in-out infinite;
}`}
        jsxCode={`<div className="scroll-indicator scroll-pulse">
  <span>⬇️</span>
  <p>Desliza hacia abajo</p>
</div>`}
        preview={
          <div className="preview-box scroll-pulse-demo">
            <div style={{textAlign: 'center'}}>
              <p style={{fontSize: '3rem', margin: 0}}>⬇️</p>
              <p>Scroll</p>
            </div>
          </div>
        }
        useCases={[
          'Indicadores de scroll hacia abajo',
          'Flechas que apuntan a más contenido',
          'Call-to-action en hero sections',
          'Guías de navegación en landing pages',
          'Elementos que indican contenido oculto'
        ]}
        tips={[
          'translateY de 5-15px según el espacio',
          'Combina movimiento con fade de opacidad',
          'Coloca en la parte inferior de secciones',
          'Usa iconos de flechas hacia abajo'
        ]}
      />
    </div>
  );
};

export default PulsacionPage;
