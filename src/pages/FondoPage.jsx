import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const FondoPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>🎨 Efectos de Fondo y Ambiente</h1>
        <p>Animaciones para backgrounds que transforman tus secciones.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB5E8', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="gradientFlow"
        description="Gradiente dinámico que fluye suavemente entre colores."
        cssCode={`@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-bg {
  background: linear-gradient(
    270deg,
    #FFB5E8,
    #B4E4FF,
    #A8D8EA,
    #FFB5E8
  );
  background-size: 800% 800%;
  animation: gradientFlow 8s ease infinite;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
        jsxCode={`<section className="hero gradient-bg">
  <div className="hero-content">
    <h1>Bienvenidos a UXnicorp</h1>
    <p>Diseño que cobra vida</p>
  </div>
</section>

<div className="gradient-bg">
  <p>Contenido sobre fondo animado</p>
</div>`}
        preview={
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            background: 'linear-gradient(270deg, #FFB5E8, #B4E4FF, #A8D8EA, #FFB5E8)',
            backgroundSize: '800% 800%',
            animation: 'gradientFlowDemo 8s ease infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.8rem'
          }}>
            Fondo con Gradiente Animado
            <style>{`
              @keyframes gradientFlowDemo {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Fondos de hero sections',
          'Backgrounds de secciones completas',
          'Landing pages modernas',
          'Headers con personalidad',
          'Cards y elementos destacados'
        ]}
        tips={[
          'Usa background-size: 800% para un movimiento suave',
          'Duración de 8-15s para efecto relajante',
          'Colores de tu marca para consistencia',
          'Combina con texto oscuro para mejor legibilidad'
        ]}
      />

      <AnimationDemo
        title="colorShift"
        description="Cambio gradual de color de fondo. Transición suave entre tonalidades."
        cssCode={`@keyframes colorShift {
  0%, 100% { background-color: #FFB5E8; }
  25% { background-color: #B4E4FF; }
  50% { background-color: #A8D8EA; }
  75% { background-color: #FFC9E3; }
}

.color-shift-bg {
  animation: colorShift 10s ease-in-out infinite;
  padding: 3rem;
  transition: background-color 1s ease;
}`}
        jsxCode={`<section className="color-shift-bg">
  <h2>Contenido sobre fondo cambiante</h2>
  <p>El color cambia suavemente</p>
</section>

<div className="color-shift-bg">
  <article>...</article>
</div>`}
        preview={
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            animation: 'colorShiftDemo 10s ease-in-out infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.8rem'
          }}>
            El color cambia suavemente
            <style>{`
              @keyframes colorShiftDemo {
                0%, 100% { background-color: #FFB5E8; }
                25% { background-color: #B4E4FF; }
                50% { background-color: #A8D8EA; }
                75% { background-color: #FFC9E3; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Backgrounds de secciones completas',
          'Efectos de ambiente sutiles',
          'Transiciones suaves entre áreas',
          'Fondos para contenido largo',
          'Páginas de perfil o about'
        ]}
        tips={[
          'Duración larga (10-15s) para cambios suaves',
          'Usa colores relacionados para cohesión',
          'Perfecto para fondos sin distracciones',
          'Combina con ease-in-out para transiciones naturales'
        ]}
      />

      <AnimationDemo
        title="pulseBackground"
        description="Fondo pulsante. Efecto de respiración que llama la atención."
        cssCode={`@keyframes pulseBackground {
  0%, 100% {
    background-color: #FFB5E8;
    transform: scale(1);
  }
  50% {
    background-color: #FF8AD8;
    transform: scale(1.02);
  }
}

.pulse-bg {
  animation: pulseBackground 3s ease-in-out infinite;
  padding: 2rem;
}`}
        jsxCode={`<div className="pulse-bg">
  <h2>¡Oferta Especial!</h2>
  <p>Solo por tiempo limitado</p>
  <button>Ver más</button>
</div>

<section className="pulse-bg">
  <div className="cta-content">...</div>
</section>`}
        preview={
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            animation: 'pulseBackgroundDemo 3s ease-in-out infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.8rem'
          }}>
            ¡Oferta Especial! 💎
            <style>{`
              @keyframes pulseBackgroundDemo {
                0%, 100% {
                  background-color: #FFB5E8;
                  transform: scale(1);
                }
                50% {
                  background-color: #FF8AD8;
                  transform: scale(1.02);
                }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Call-to-action sections',
          'Notificaciones importantes',
          'Ofertas especiales',
          'Áreas que necesitan atención',
          'Botones o cards destacados'
        ]}
        tips={[
          'Duración corta (2-3s) para efecto notable',
          'Scale sutil (1.02-1.05) para no ser invasivo',
          'Usa en áreas específicas, no en toda la página',
          'Combina con cambio de color para más impacto'
        ]}
      />

      <AnimationDemo
        title="stripedMove"
        description="Rayas animadas. Fondo con patrón de rayas en movimiento."
        cssCode={`@keyframes stripedMove {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

.striped-bg {
  background-image: repeating-linear-gradient(
    45deg,
    #FFB5E8,
    #FFB5E8 20px,
    #FFC9E3 20px,
    #FFC9E3 40px
  );
  background-size: 50px 50px;
  animation: stripedMove 2s linear infinite;
  padding: 2rem;
}`}
        jsxCode={`<div className="striped-bg">
  <h2>Contenido dinámico</h2>
  <p>Fondo con movimiento constante</p>
</div>

<section className="striped-bg">
  <div className="content">...</div>
</section>`}
        preview={
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            backgroundImage: 'repeating-linear-gradient(45deg, #FFB5E8, #FFB5E8 20px, #FFC9E3 20px, #FFC9E3 40px)',
            backgroundSize: '50px 50px',
            animation: 'stripedMoveDemo 2s linear infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.8rem'
          }}>
            Rayas en Movimiento
            <style>{`
              @keyframes stripedMoveDemo {
                0% { background-position: 0 0; }
                100% { background-position: 50px 50px; }
              }
            `}</style>
          </div>
        }
        useCases={[
          'Fondos de progreso o carga',
          'Elementos en construcción',
          'Backgrounds decorativos',
          'Secciones con estilo retro',
          'Headers con movimiento'
        ]}
        tips={[
          'Ajusta el ángulo (45deg) para diferentes direcciones',
          'Duración rápida (1-3s) para movimiento visible',
          'Usa colores cercanos para efecto sutil',
          'repeating-linear-gradient crea el patrón'
        ]}
      />
    </div>
  );
};

export default FondoPage;
