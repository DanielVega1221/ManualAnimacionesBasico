import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const EspecialesPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos Especiales y Avanzados</h1>
        <p>Animaciones únicas y creativas para experiencias visuales impactantes y memorables.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Los favoritos de los UXnicornios más creativos de UXnicorp</p>
      </div>

      <AnimationDemo
        title="glitch"
        description="Efecto glitch/distorsión. Simulación de error digital estilizado."
        cssCode={`@keyframes glitch {
  0% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  20% {
    transform: translate(-5px, 5px);
    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 90%);
  }
  40% {
    transform: translate(5px, -5px);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0% 100%);
  }
  60% {
    transform: translate(-5px, -5px);
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 80%);
  }
  80% {
    transform: translate(5px, 5px);
    clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
  }
  100% {
    transform: translate(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

.glitch {
  position: relative;
  animation: glitch 1s infinite;
}`}
        jsxCode={`<h1 className="glitch" data-text="ERROR 404">
  ERROR 404
</h1>

<div className="cyberpunk-title glitch">
  <span>CYBER</span>
</div>

// Con pseudo-elementos para efecto completo
.glitch::before {
  content: attr(data-text);
  position: absolute;
  color: #f00;
  mix-blend-mode: multiply;
  animation: glitch 2s infinite;
}`}
        preview={
          <div className="preview-box" style={{background: '#0a0a0a'}}>
            <h1 style={{
              fontSize: '3rem',
              margin: 0,
              color: '#00ff41',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              animation: 'glitchDemo 2s infinite',
              textShadow: '2px 2px #ff0000, -2px -2px #00ffff'
            }}>
              GLITCH
            </h1>
            <style>{`
              @keyframes glitchDemo {
                0%, 100% {
                  transform: translate(0);
                  text-shadow: 2px 2px #ff0000, -2px -2px #00ffff;
                }
                20% {
                  transform: translate(-5px, 5px);
                  text-shadow: 5px 0 #ff0000, -5px 0 #00ffff;
                }
                40% {
                  transform: translate(5px, -5px);
                  text-shadow: 0 5px #ff0000, 0 -5px #00ffff;
                }
                60% {
                  transform: translate(-3px, -3px);
                  text-shadow: -3px 3px #ff0000, 3px -3px #00ffff;
                }
                80% {
                  transform: translate(3px, 3px);
                  text-shadow: 3px -3px #ff0000, -3px 3px #00ffff;
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Elementos cyberpunk o futuristas',
          'Páginas 404 creativas',
          'Títulos con estética digital',
          'Efectos de error estilizados',
          'Diseños con temática tecnológica'
        ]}
        tips={[
          'Combina con colores RGB separados',
          'clip-path añade distorsión visual',
          'Usa con moderación por su intensidad',
          'Perfecto para temáticas tech/cyber'
        ]}
      />

      <AnimationDemo
        title="neon"
        description="Efecto neón pulsante. Luz de neón con brillo intermitente."
        cssCode={`@keyframes neon {
  0%, 100% {
    text-shadow:
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px #fff,
      0 0 40px #ff00de,
      0 0 70px #ff00de,
      0 0 80px #ff00de,
      0 0 100px #ff00de,
      0 0 150px #ff00de;
  }
  50% {
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px #ff00de,
      0 0 35px #ff00de,
      0 0 40px #ff00de,
      0 0 50px #ff00de,
      0 0 75px #ff00de;
  }
}

.neon {
  color: #fff;
  animation: neon 1.5s ease-in-out infinite;
}`}
        jsxCode={`<h1 className="neon">
  NEON LIGHTS
</h1>

<div className="retro-sign neon">
  🌟 OPEN 24/7
</div>`}
        preview={
          <div className="preview-box" style={{background: '#0a0014'}}>
            <h1 style={{
              fontSize: '2.5rem',
              margin: 0,
              color: '#fff',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              animation: 'neonDemo 1.5s ease-in-out infinite',
              letterSpacing: '0.1em'
            }}>
              NEON
            </h1>
            <style>{`
              @keyframes neonDemo {
                0%, 100% {
                  text-shadow:
                    0 0 10px #fff,
                    0 0 20px #fff,
                    0 0 30px #fff,
                    0 0 40px #ff00de,
                    0 0 70px #ff00de,
                    0 0 80px #ff00de;
                }
                50% {
                  text-shadow:
                    0 0 5px #fff,
                    0 0 10px #fff,
                    0 0 15px #fff,
                    0 0 20px #ff00de,
                    0 0 35px #ff00de;
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Diseños retro de los 80s',
          'Elementos con estética neón',
          'Títulos en fondos oscuros',
          'Temas nocturnos o de club',
          'Logos y signos iluminados'
        ]}
        tips={[
          'Múltiples text-shadow crean la profundidad',
          'Funciona mejor en fondos oscuros',
          'Ajusta el color del neón según tu paleta',
          'Combina con fuentes bold para mayor impacto'
        ]}
      />

      <AnimationDemo
        title="morphing"
        description="Transformación de forma. Cambio suave entre diferentes formas o estados."
        cssCode={`@keyframes morphing {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: rotate(180deg) scale(1);
  }
  75% {
    border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
    transform: rotate(270deg) scale(1.1);
  }
}

.morphing {
  animation: morphing 8s ease-in-out infinite;
}`}
        jsxCode={`<div className="morphing-shape morphing">
  <!-- Forma que cambia -->
</div>

<button className="blob-button morphing">
  <span>Hover Me</span>
</button>`}
        preview={
          <div className="preview-box">
            <div style={{
              width: '150px',
              height: '150px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              animation: 'morphingDemo 8s ease-in-out infinite'
            }} />
            <style>{`
              @keyframes morphingDemo {
                0%, 100% {
                  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                  transform: rotate(0deg);
                }
                25% {
                  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                  transform: rotate(90deg);
                }
                50% {
                  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
                  transform: rotate(180deg);
                }
                75% {
                  border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
                  transform: rotate(270deg);
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Elementos decorativos orgánicos',
          'Fondos con formas fluidas',
          'Blobs y formas abstractas',
          'Transiciones entre estados visuales',
          'Diseños modernos y dinámicos'
        ]}
        tips={[
          'border-radius complejo crea formas orgánicas',
          'Combina con rotate para movimiento continuo',
          'Duración larga (6-10s) para suavidad',
          'Perfecto para fondos decorativos'
        ]}
      />

      <AnimationDemo
        title="flip3D"
        description="Volteo 3D completo. Rotación tridimensional de tarjetas."
        cssCode={`@keyframes flip3D {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
}

.flip-3d {
  transform-style: preserve-3d;
  animation: flip3D 3s ease-in-out infinite;
}

.flip-3d-front,
.flip-3d-back {
  backface-visibility: hidden;
  position: absolute;
}

.flip-3d-back {
  transform: rotateY(180deg);
}`}
        jsxCode={`<div className="card-3d flip-3d">
  <div className="flip-3d-front">
    <h3>Frente</h3>
    <p>Información visible</p>
  </div>
  <div className="flip-3d-back">
    <h3>Reverso</h3>
    <p>Información oculta</p>
  </div>
</div>`}
        preview={
          <div className="preview-box">
            <div style={{
              width: '150px',
              height: '150px',
              position: 'relative',
              transformStyle: 'preserve-3d',
              animation: 'flip3DDemo 4s ease-in-out infinite'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                backfaceVisibility: 'hidden'
              }}>
                FRONT
              </div>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden'
              }}>
                BACK
              </div>
            </div>
            <style>{`
              @keyframes flip3DDemo {
                0%, 30% {
                  transform: perspective(1000px) rotateY(0deg);
                }
                70%, 100% {
                  transform: perspective(1000px) rotateY(360deg);
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Tarjetas con información dual',
          'Juegos de memoria o cartas',
          'Galerías interactivas',
          'Perfiles con información adicional',
          'Elementos que revelan contenido oculto'
        ]}
        tips={[
          'preserve-3d es crucial para el efecto',
          'backface-visibility: hidden oculta el reverso',
          'position: absolute para superponer caras',
          'Usa JavaScript para flip on click'
        ]}
      />
    </div>
  );
};

export default EspecialesPage;
