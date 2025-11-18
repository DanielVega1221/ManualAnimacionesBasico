import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const TextoPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Texto y Tipografía</h1>
        <p>Animaciones especiales para texto que crean experiencias tipográficas únicas.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Perfecto para títulos impactantes en proyectos de UXnicorp</p>
      </div>

      <AnimationDemo
        title="typewriter"
        description="Efecto de escritura progresiva. Simula texto siendo escrito en tiempo real."
        cssCode={`@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid;
  white-space: nowrap;
  animation: 
    typewriter 3s steps(40) 1s forwards,
    blink 0.5s step-end infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}`}
        jsxCode={`<h1 className="typewriter">
  Bienvenido a mi sitio web
</h1>

<p className="typewriter" 
   style={{animationDuration: '4s'}}>
  Descubre contenido increíble...
</p>`}
        preview={
          <div className="preview-box">
            <div style={{
              overflow: 'hidden',
              borderRight: '3px solid #667eea',
              whiteSpace: 'nowrap',
              animation: 'typewriterDemo 3s steps(30) infinite, blinkCursor 0.7s step-end infinite',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2c3e50'
            }}>
              Hola, soy un texto...
            </div>
            <style>{`
              @keyframes typewriterDemo {
                0%, 100% { width: 0; }
                50%, 95% { width: 100%; }
              }
              @keyframes blinkCursor {
                50% { border-color: transparent; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Títulos hero en landing pages',
          'Introducciones y presentaciones',
          'Subtítulos descriptivos',
          'Efectos de terminal o código',
          'Mensajes que aparecen gradualmente'
        ]}
        tips={[
          'Usa steps() con el número aproximado de caracteres',
          'border-right simula el cursor parpadeante',
          'white-space: nowrap es esencial',
          'Combina con forwards para mantener el resultado'
        ]}
      />

      <AnimationDemo
        title="textGlow"
        description="Resplandor en texto. Efecto de neón que pulsa en el texto."
        cssCode={`@keyframes textGlow {
  0%, 100% {
    text-shadow: 
      0 0 10px rgba(102, 126, 234, 0.5),
      0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    text-shadow: 
      0 0 20px rgba(102, 126, 234, 0.8),
      0 0 40px rgba(102, 126, 234, 0.6),
      0 0 60px rgba(102, 126, 234, 0.4);
  }
}

.text-glow {
  animation: textGlow 2s ease-in-out infinite;
  color: #667eea;
  font-weight: bold;
}`}
        jsxCode={`<h2 className="title text-glow">
  ✨ Título Premium
</h2>

<button className="cta-button">
  <span className="text-glow">Comprar Ahora</span>
</button>`}
        preview={
          <div className="preview-box" style={{background: '#1a1a2e'}}>
            <h2 style={{
              fontSize: '2.5rem',
              margin: 0,
              color: '#667eea',
              fontWeight: 'bold',
              animation: 'textGlowDemo 2s ease-in-out infinite'
            }}>
              ✨ PREMIUM
            </h2>
            <style>{`
              @keyframes textGlowDemo {
                0%, 100% {
                  text-shadow: 
                    0 0 10px rgba(102, 126, 234, 0.5),
                    0 0 20px rgba(102, 126, 234, 0.3);
                }
                50% {
                  text-shadow: 
                    0 0 20px rgba(102, 126, 234, 1),
                    0 0 40px rgba(102, 126, 234, 0.8),
                    0 0 60px rgba(102, 126, 234, 0.6);
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Títulos importantes y destacados',
          'Botones CTA premium',
          'Texto en fondos oscuros',
          'Elementos con estilo futurista/neón',
          'Badges y etiquetas especiales'
        ]}
        tips={[
          'Funciona mejor en fondos oscuros',
          'Usa colores brillantes para el glow',
          'Múltiples text-shadow crean profundidad',
          'Combina con font-weight: bold'
        ]}
      />

      <AnimationDemo
        title="letterSpacing"
        description="Expansión de espaciado entre letras. Efecto elegante de separación."
        cssCode={`@keyframes letterSpacing {
  0% {
    letter-spacing: 0;
    opacity: 0;
  }
  100% {
    letter-spacing: 0.3em;
    opacity: 1;
  }
}

.letter-spacing {
  animation: letterSpacing 1s ease-out forwards;
}`}
        jsxCode={`<h2 className="elegant-title letter-spacing">
  ELEGANCIA
</h2>

<div className="subtitle letter-spacing">
  Diseño Minimalista
</div>`}
        preview={
          <div className="preview-box">
            <h2 style={{
              fontSize: '2rem',
              margin: 0,
              color: '#2c3e50',
              fontWeight: '300',
              textTransform: 'uppercase',
              animation: 'letterSpacingDemo 2s ease-out infinite'
            }}>
              ELEGANTE
            </h2>
            <style>{`
              @keyframes letterSpacingDemo {
                0%, 100% {
                  letter-spacing: 0;
                  opacity: 0.6;
                }
                50% {
                  letter-spacing: 0.3em;
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Títulos elegantes y sofisticados',
          'Efectos hover en navegación',
          'Encabezados minimalistas',
          'Marcas de lujo o premium',
          'Diseños con estética limpia'
        ]}
        tips={[
          'Funciona mejor con mayúsculas',
          'Usa font-weight ligero (300-400)',
          'Perfecto para hover states',
          'Combina con fadeIn para suavizar'
        ]}
      />

      <AnimationDemo
        title="gradientShift"
        description="Gradiente animado en texto. Colores que fluyen a través del texto."
        cssCode={`@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-shift {
  background: linear-gradient(
    90deg,
    #667eea,
    #764ba2,
    #f093fb,
    #667eea
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}`}
        jsxCode={`<h1 className="hero-title gradient-shift">
  Título Impresionante
</h1>

<span className="premium-badge gradient-shift">
  ⭐ VIP
</span>`}
        preview={
          <div className="preview-box">
            <h1 style={{
              fontSize: '2.5rem',
              margin: 0,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShiftDemo 3s ease infinite'
            }}>
              PREMIUM
            </h1>
            <style>{`
              @keyframes gradientShiftDemo {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Títulos premium y destacados',
          'Logos animados',
          'Elementos con branding fuerte',
          'CTAs que necesitan máxima atención',
          'Textos hero en landing pages'
        ]}
        tips={[
          'background-size: 200% es clave para el movimiento',
          'Usa colores que combinen bien',
          'background-clip: text es esencial',
          'Funciona en navegadores modernos'
        ]}
      />
    </div>
  );
};

export default TextoPage;
