import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const BrilloPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Brillo y Destello</h1>
        <p>Animaciones que añaden luminosidad y captan la atención con destellos y brillos.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="shimmer"
        description="Brillo deslizante horizontal. Efecto de luz que atraviesa el elemento."
        cssCode={`@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 20%,
    #ffffff 50%,
    #e0e0e0 80%,
    #f0f0f0 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}`}
        jsxCode={`<div className="badge shimmer">
  <span>⭐ Destacado</span>
</div>

<!-- Para skeleton loading -->
<div className="skeleton shimmer" 
     style={{width: '100%', height: '20px'}}>
</div>`}
        preview={
          <div className="preview-box shimmer-demo">
            <h3>⭐ Badge Destacado</h3>
            <p>Brillo atravesando</p>
          </div>
        }
        useCases={[
          'Badges y etiquetas destacadas',
          'Títulos importantes que necesitan atención',
          'Skeleton screens durante carga',
          'Botones premium o destacados',
          'Indicadores de contenido nuevo'
        ]}
        tips={[
          'Ideal para indicar que algo está cargando',
          'Usa colores sutiles para no cansar la vista',
          'Ajusta la velocidad según el contexto (1-3s)',
          'Combina con gradientes para efecto más realista'
        ]}
      />

      <AnimationDemo
        title="sparkle"
        description="Destellos intermitentes. Efecto de brillo que aparece y desaparece."
        cssCode={`@keyframes sparkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.2);
  }
}

.sparkle {
  animation: sparkle 1.5s ease-in-out infinite;
}`}
        jsxCode={`<div className="star sparkle">⭐</div>

<button className="premium-button">
  <span className="sparkle">✨</span>
  Upgrade Premium
</button>`}
        preview={
          <div className="preview-box sparkle-demo">
            <h3>✨ Elemento Brillante</h3>
            <p style={{fontSize: '3rem'}}>⭐</p>
          </div>
        }
        useCases={[
          'Elementos decorativos como estrellas',
          'Highlights en características premium',
          'Iconos que necesitan atención',
          'Indicadores de logros o recompensas',
          'Efectos de partículas decorativas'
        ]}
        tips={[
          'Usa con moderación para no sobrecargar',
          'Perfecto para elementos pequeños (iconos, emojis)',
          'Combina scale y opacity para efecto más rico',
          'Añade animation-delay para efecto escalonado'
        ]}
      />

      <AnimationDemo
        title="glowPulse"
        description="Resplandor pulsante. Efecto de luz que crece y decrece alrededor del elemento."
        cssCode={`@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(102, 126, 234, 0.5),
                0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.8),
                0 0 40px rgba(102, 126, 234, 0.6),
                0 0 60px rgba(102, 126, 234, 0.4);
  }
}

.glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}`}
        jsxCode={`<div className="error-404 glow-pulse">
  <h1>404</h1>
  <p>Página no encontrada</p>
</div>

<button className="alert-button glow-pulse">
  🔔 Nueva notificación
</button>`}
        preview={
          <div className="preview-box glow-pulse-demo">
            <h3>⚡ Elemento con Glow</h3>
            <p>Resplandor pulsante</p>
          </div>
        }
        useCases={[
          'Elementos de error 404 temáticos',
          'Alertas y notificaciones importantes',
          'Botones de acción crítica',
          'Indicadores de estado activo',
          'Elementos que requieren atención inmediata'
        ]}
        tips={[
          'Ajusta los colores del box-shadow según tu diseño',
          'Usa colores brillantes (azul, verde, rojo)',
          'Duración de 2-3s para pulsación relajada',
          'Combina con border o background del mismo color'
        ]}
      />

      <AnimationDemo
        title="spark"
        description="Chispa con movimiento vertical. Efecto de partícula que sube y desaparece."
        cssCode={`@keyframes spark {
  0% {
    opacity: 0;
    transform: translateY(0) scale(1);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0;
    transform: translateY(-60px) scale(0.5);
  }
  100% {
    opacity: 0;
    transform: translateY(-60px) scale(0.5);
  }
}

.spark {
  animation: spark 2s ease-out infinite;
}`}
        jsxCode={`<div className="spark-container">
  <span className="spark">⚡</span>
  <span className="spark" 
        style={{animationDelay: '0.3s'}}>✨</span>
  <span className="spark" 
        style={{animationDelay: '0.6s'}}>💫</span>
</div>`}
        preview={
          <div className="preview-box spark-demo">
            <h3>⚡ Chispa Eléctrica</h3>
            <p style={{fontSize: '2.5rem'}}>⚡</p>
          </div>
        }
        useCases={[
          'Partículas decorativas en fondos',
          'Efectos eléctricos o mágicos',
          'Animaciones al hacer clic en botones',
          'Confetti o celebraciones',
          'Efectos de hover especiales'
        ]}
        tips={[
          'Usa múltiples elementos con animation-delay',
          'Combina con position: absolute para posicionamiento',
          'Perfecto para efectos de "burst" o explosión',
          'Ajusta translateY según el espacio disponible'
        ]}
      />
    </div>
  );
};

export default BrilloPage;
