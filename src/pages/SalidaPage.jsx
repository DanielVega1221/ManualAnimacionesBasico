import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const SalidaPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Animaciones de Salida y Desaparición</h1>
        <p>Efectos para ocultar elementos de forma elegante y crear transiciones suaves.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="fadeOut"
        description="Desaparición gradual mediante reducción de opacidad. Salida suave y discreta."
        cssCode={`@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-out {
  animation: fadeOut 0.5s ease-out forwards;
}`}
        jsxCode={`<div className="fade-out">
  <div className="modal">
    <p>Este modal se desvanece...</p>
  </div>
</div>`}
        preview={
          <div className="preview-box fade-out-demo">
            <h3>👋 Elemento con fadeOut</h3>
            <p>Desaparezco gradualmente</p>
          </div>
        }
        useCases={[
          'Cerrar modales y ventanas emergentes',
          'Ocultar notificaciones después de mostrarlas',
          'Transiciones entre vistas',
          'Remover overlays de fondo',
          'Mensajes de confirmación temporales'
        ]}
        tips={[
          'Usa forwards para mantener el estado final',
          'Combina con display: none después de la animación',
          'Duración de 0.3s-0.5s para rapidez sin brusquedad',
          'Considera usar visibility: hidden al finalizar'
        ]}
      />

      <AnimationDemo
        title="fadeOutDown"
        description="Desaparición hacia abajo con desvanecimiento. Movimiento descendente elegante."
        cssCode={`@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
}

.fade-out-down {
  animation: fadeOutDown 0.6s ease-out forwards;
}`}
        jsxCode={`<div className="notification fade-out-down">
  <p>✓ Guardado exitosamente</p>
</div>`}
        preview={
          <div className="preview-box fade-out-down-demo">
            <div className="notification-preview">
              <h3>✓ Notificación</h3>
              <p>Me voy hacia abajo</p>
            </div>
          </div>
        }
        useCases={[
          'Notificaciones que se auto-ocultan',
          'Mensajes de éxito o error',
          'Tooltips y hints temporales',
          'Banners informativos',
          'Alertas que desaparecen'
        ]}
        tips={[
          'Perfecto para notificaciones en la parte superior',
          'Combina con un delay antes de iniciar',
          'translateY de 20-40px para movimiento natural',
          'Usa ease-in para aceleración al salir'
        ]}
      />

      <AnimationDemo
        title="slideOut"
        description="Deslizamiento hacia afuera. Efecto de salida lateral para paneles."
        cssCode={`@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

.slide-out {
  animation: slideOut 0.4s ease-in forwards;
}`}
        jsxCode={`<aside className="sidebar slide-out">
  <nav>
    <a href="#">Menú</a>
  </nav>
</aside>`}
        preview={
          <div className="preview-box slide-out-demo">
            <div className="sidebar-preview">
              <h3>📋 Menú</h3>
              <p>Salgo hacia la derecha</p>
            </div>
          </div>
        }
        useCases={[
          'Cerrar menús laterales (sidebars)',
          'Ocultar drawers y paneles',
          'Transiciones de navegación',
          'Carruseles y sliders',
          'Paneles de configuración'
        ]}
        tips={[
          'Ajusta la dirección según la posición del elemento',
          'Usa ease-in para aceleración al salir',
          'Combina con transform: translateX(-100%) para salir a la izquierda',
          'Considera añadir box-shadow que también desaparece'
        ]}
      />

      <AnimationDemo
        title="zoomOut"
        description="Reducción con desaparición. Efecto de zoom inverso dramático."
        cssCode={`@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.3);
  }
}

.zoom-out {
  animation: zoomOut 0.5s ease-in forwards;
}`}
        jsxCode={`<div className="lightbox zoom-out">
  <img src="image.jpg" alt="Gallery" />
</div>`}
        preview={
          <div className="preview-box zoom-out-demo">
            <div className="image-preview">
              <h3>🖼️ Imagen</h3>
              <p>Zoom out!</p>
            </div>
          </div>
        }
        useCases={[
          'Cerrar galerías de imágenes (lightbox)',
          'Ocultar modales importantes',
          'Transiciones dramáticas',
          'Elementos que necesitan salida impactante',
          'Cerrar overlays de video'
        ]}
        tips={[
          'Scale final de 0.3-0.5 para efecto visible',
          'Duración corta (0.4-0.6s) para rapidez',
          'Combina con backdrop que también desaparece',
          'Usa transform-origin: center para zoom centrado'
        ]}
      />
    </div>
  );
};

export default SalidaPage;
