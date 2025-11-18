import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const EntradaPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Animaciones de Entrada y Aparición</h1>
        <p>Efectos para hacer aparecer elementos de forma elegante y captar la atención del usuario.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Guía para UXnicornios de UXnicorp</p>
      </div>

      <AnimationDemo
        title="fadeIn"
        description="Aparición gradual mediante incremento de opacidad. Efecto suave y profesional."
        cssCode={`@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-out;
}`}
        jsxCode={`<div className="fade-in">
  <h2>¡Contenido que aparece gradualmente!</h2>
  <p>Perfecto para modales y overlays</p>
</div>`}
        preview={
          <div className="preview-box fade-in-demo">
            <h3>✨ Elemento con fadeIn</h3>
            <p>Aparezco suavemente</p>
          </div>
        }
        useCases={[
          'Modales y ventanas emergentes',
          'Overlays y fondos oscurecidos',
          'Notificaciones y alertas',
          'Contenido que se carga dinámicamente',
          'Elementos de introducción en páginas'
        ]}
        tips={[
          'Usa duración de 0.5s a 1s para un efecto rápido y natural',
          'Combina con translateY para un efecto más dinámico',
          'Ideal para no sobrecargar visualmente al usuario',
          'Evita usarlo en muchos elementos a la vez'
        ]}
      />

      <AnimationDemo
        title="fadeInUp"
        description="Aparición desde abajo con desvanecimiento. Combina movimiento vertical con opacidad."
        cssCode={`@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}`}
        jsxCode={`<div className="fade-in-up">
  <h2>Título que sube</h2>
  <p>Deslizamiento suave desde abajo</p>
</div>`}
        preview={
          <div className="preview-box fade-in-up-demo">
            <h3>📈 Elemento con fadeInUp</h3>
            <p>Subo mientras aparezco</p>
          </div>
        }
        useCases={[
          'Títulos y encabezados principales',
          'Tarjetas de productos o servicios',
          'Secciones completas de la página',
          'Badges y etiquetas importantes',
          'Elementos de lista que aparecen secuencialmente'
        ]}
        tips={[
          'Ajusta translateY entre 20px-50px según el tamaño del elemento',
          'Usa animation-delay para crear efectos escalonados',
          'Perfecto para scroll animations con IntersectionObserver',
          'Combina con ease-out para desaceleración natural'
        ]}
      />

      <AnimationDemo
        title="fadeInLeft"
        description="Aparición desde la izquierda con desvanecimiento. Efecto de entrada lateral."
        cssCode={`@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  animation: fadeInLeft 0.7s ease-out;
}`}
        jsxCode={`<div className="fade-in-left">
  <div className="project-card">
    <h3>Proyecto Destacado</h3>
    <p>Desliza desde la izquierda</p>
  </div>
</div>`}
        preview={
          <div className="preview-box fade-in-left-demo">
            <div className="card-preview">
              <h3>💼 Card con fadeInLeft</h3>
              <p>Entro desde la izquierda</p>
            </div>
          </div>
        }
        useCases={[
          'Tarjetas de proyectos en portfolios',
          'Elementos de navegación lateral',
          'Imágenes en galerías',
          'Paneles laterales y sidebars',
          'Contenido que aparece al hacer scroll'
        ]}
        tips={[
          'Ideal para layouts con contenido alineado a la izquierda',
          'Combina con fadeInRight en elementos alternados',
          'Usa translateX de -30px a -50px para movimiento notable',
          'Perfecto para crear sensación de profundidad'
        ]}
      />

      <AnimationDemo
        title="scaleIn"
        description="Aparición con zoom desde el centro. Efecto de expansión dramático."
        cssCode={`@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`}
        jsxCode={`<div className="scale-in">
  <div className="modal">
    <h3>¡Modal Impactante!</h3>
    <p>Aparezco con zoom</p>
  </div>
</div>`}
        preview={
          <div className="preview-box scale-in-demo">
            <div className="modal-preview">
              <h3>🎯 Elemento con scaleIn</h3>
              <p>¡Zoom desde el centro!</p>
            </div>
          </div>
        }
        useCases={[
          'Modales importantes y confirmaciones',
          'Imágenes en lightbox o ampliadas',
          'Botones de acción principal (CTA)',
          'Elementos destacados que requieren atención',
          'Iconos y badges especiales'
        ]}
        tips={[
          'Usa cubic-bezier para efecto de rebote sutil',
          'Scale inicial de 0.5-0.8 según preferencia',
          'Duración corta (0.4-0.6s) para evitar mareo',
          'Combina con backdrop-filter para efecto profesional'
        ]}
      />

      <AnimationDemo
        title="slideUp"
        description="Deslizamiento hacia arriba con fade. Movimiento suave y elegante."
        cssCode={`@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.9s ease-out;
}`}
        jsxCode={`<section className="slide-up">
  <div className="content-section">
    <h2>Sección Completa</h2>
    <p>Desliza hacia arriba suavemente</p>
  </div>
</section>`}
        preview={
          <div className="preview-box slide-up-demo">
            <div className="section-preview">
              <h3>📄 Sección con slideUp</h3>
              <p>Contenedor completo en movimiento</p>
            </div>
          </div>
        }
        useCases={[
          'Contenedores de contenido completo',
          'Secciones de página al hacer scroll',
          'Tarjetas con mucho contenido',
          'Formularios y áreas de input',
          'Bloques de información detallada'
        ]}
        tips={[
          'Usa translateY mayor (40-60px) para secciones grandes',
          'Duración más larga (0.8-1.2s) para movimiento elegante',
          'Combina con stagger effect para múltiples elementos',
          'Perfecto para revelar contenido paso a paso'
        ]}
      />
    </div>
  );
};

export default EntradaPage;
