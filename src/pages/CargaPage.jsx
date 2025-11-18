import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const CargaPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Carga y Progreso</h1>
        <p>Animaciones para indicar procesos de carga y mantener al usuario informado.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="skeleton"
        description="Placeholder pulsante. Indica que el contenido está cargando."
        cssCode={`@keyframes skeleton {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #e0e0e0 40px,
    #f0f0f0 80px
  );
  background-size: 200px 100%;
  animation: skeleton 1.5s ease-in-out infinite;
}`}
        jsxCode={`<div className="content-loader">
  <div className="skeleton" 
       style={{width: '100%', height: '20px', borderRadius: '4px'}} />
  <div className="skeleton" 
       style={{width: '80%', height: '20px', borderRadius: '4px', marginTop: '10px'}} />
  <div className="skeleton" 
       style={{width: '60%', height: '20px', borderRadius: '4px', marginTop: '10px'}} />
</div>`}
        preview={
          <div className="preview-box">
            <div style={{width: '100%', maxWidth: '400px'}}>
              <div style={{
                width: '100%',
                height: '20px',
                borderRadius: '4px',
                background: 'linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px)',
                backgroundSize: '200px 100%',
                animation: 'skeletonDemo 1.5s ease-in-out infinite',
                marginBottom: '10px'
              }} />
              <div style={{
                width: '80%',
                height: '20px',
                borderRadius: '4px',
                background: 'linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px)',
                backgroundSize: '200px 100%',
                animation: 'skeletonDemo 1.5s ease-in-out infinite',
                animationDelay: '0.1s',
                marginBottom: '10px'
              }} />
              <div style={{
                width: '60%',
                height: '20px',
                borderRadius: '4px',
                background: 'linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px)',
                backgroundSize: '200px 100%',
                animation: 'skeletonDemo 1.5s ease-in-out infinite',
                animationDelay: '0.2s'
              }} />
            </div>
            <style>{`
              @keyframes skeletonDemo {
                0% { background-position: -200px 0; }
                100% { background-position: calc(200px + 100%) 0; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Carga de contenido dinámico',
          'Placeholders de texto e imágenes',
          'Cards de productos cargando',
          'Listas y feeds sociales',
          'Cualquier contenido que tarda en cargar'
        ]}
        tips={[
          'Replica la estructura del contenido real',
          'Usa formas similares al contenido final',
          'Gradiente gris claro para profesionalismo',
          'Mejora la percepción de velocidad de carga'
        ]}
      />

      <AnimationDemo
        title="progressBar"
        description="Barra de progreso animada. Muestra visualmente el avance de un proceso."
        cssCode={`@keyframes progressBar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  animation: progressBar 3s ease-out forwards;
}`}
        jsxCode={`<div className="progress-container">
  <div className="progress-bar">
    <div 
      className="progress-fill"
      style={{width: \`\${progress}%\`}}
    />
  </div>
  <span>{progress}%</span>
</div>

<!-- Para skill bars -->
<div className="skill">
  <span>JavaScript</span>
  <div className="progress-bar">
    <div className="progress-fill" 
         style={{width: '85%'}} />
  </div>
</div>`}
        preview={
          <div className="preview-box">
            <div style={{width: '100%', maxWidth: '400px'}}>
              <div style={{marginBottom: '0.5rem', color: '#5a6c7d', fontWeight: '600'}}>
                Progreso de carga...
              </div>
              <div style={{
                width: '100%',
                height: '10px',
                background: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  animation: 'progressBarDemo 3s ease-out infinite',
                  borderRadius: '5px'
                }} />
              </div>
            </div>
            <style>{`
              @keyframes progressBarDemo {
                0% { width: 0%; }
                90%, 100% { width: 100%; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Indicadores de carga de archivos',
          'Barras de skills en portfolios',
          'Progreso de formularios multi-paso',
          'Instaladores y configuraciones',
          'Indicadores de tiempo restante'
        ]}
        tips={[
          'Usa forwards para mantener el estado final',
          'Gradientes hacen la barra más atractiva',
          'Añade % o tiempo restante como texto',
          'Combina con números incrementales'
        ]}
      />

      <AnimationDemo
        title="dots"
        description="Puntos animados. Clásico indicador de carga con tres puntos."
        cssCode={`@keyframes dots {
  0%, 20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.loading-dots span {
  animation: dots 1.4s infinite;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
}`}
        jsxCode={`<div className="loading-message">
  Cargando
  <span className="loading-dots">
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </span>
</div>

<button disabled>
  Procesando
  <span className="loading-dots">...</span>
</button>`}
        preview={
          <div className="preview-box">
            <div style={{fontSize: '1.5rem', color: '#2c3e50', fontWeight: '600'}}>
              Cargando
              <span style={{display: 'inline-flex', gap: '2px', marginLeft: '4px'}}>
                <span style={{animation: 'dotsDemo 1.4s infinite'}}>.</span>
                <span style={{animation: 'dotsDemo 1.4s infinite', animationDelay: '0.2s'}}>.</span>
                <span style={{animation: 'dotsDemo 1.4s infinite', animationDelay: '0.4s'}}>.</span>
              </span>
            </div>
            <style>{`
              @keyframes dotsDemo {
                0%, 20% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Mensajes de carga simples',
          'Botones en estado de procesamiento',
          'Textos de espera',
          'Indicadores minimalistas',
          'Loading states en componentes'
        ]}
        tips={[
          'Usa animation-delay para el efecto secuencial',
          'Spacing adecuado entre puntos',
          'Duración de 1.2-1.6s para ritmo natural',
          'Muy útil para espacios reducidos'
        ]}
      />

      <AnimationDemo
        title="spinnerBorder"
        description="Spinner circular con borde. Indicador de carga rotatorio clásico."
        cssCode={`@keyframes spinnerBorder {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner-border {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(102, 126, 234, 0.2);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spinnerBorder 1s linear infinite;
}`}
        jsxCode={`<div className="loading-container">
  <div className="spinner-border" />
  <p>Cargando...</p>
</div>

<button disabled>
  <div className="spinner-border spinner-small" />
  Cargando
</button>`}
        preview={
          <div className="preview-box">
            <div style={{
              width: '50px',
              height: '50px',
              border: '5px solid rgba(102, 126, 234, 0.2)',
              borderTopColor: '#667eea',
              borderRadius: '50%',
              animation: 'spinnerBorderDemo 1s linear infinite'
            }} />
            <style>{`
              @keyframes spinnerBorderDemo {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Carga de páginas completas',
          'Overlays de carga',
          'Botones en procesamiento',
          'Refetch de datos',
          'Loading states generales'
        ]}
        tips={[
          'border-radius: 50% crea el círculo',
          'border-top-color diferente crea el efecto',
          'Usa linear para rotación constante',
          'Varía el tamaño según el contexto'
        ]}
      />
    </div>
  );
};

export default CargaPage;
