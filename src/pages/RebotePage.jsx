import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const RebotePage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Rebote y Elasticidad</h1>
        <p>Animaciones que simulan rebotes y comportamiento elástico para feedback dinámico.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="bounce"
        description="Rebote vertical clásico. Simula una pelota que rebota."
        cssCode={`@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 2s ease-in-out infinite;
}`}
        jsxCode={`<button className="action-button bounce">
  🚀 ¡Lanzar!
</button>

<div className="notification bounce">
  🎉 ¡Éxito!
</div>`}
        preview={
          <div className="preview-box bounce-demo">
            <div style={{padding: '1rem 2rem', background: '#4caf50', color: 'white', borderRadius: '8px', fontWeight: 'bold'}}>
              🎾 Rebote
            </div>
          </div>
        }
        useCases={[
          'Botones de acción que necesitan atención',
          'Elementos que indican éxito',
          'Iconos interactivos',
          'Llamadas a la acción dinámicas',
          'Elementos que celebran logros'
        ]}
        tips={[
          'Los valores decrecientes simulan pérdida de energía',
          'Ajusta las alturas (-30px, -15px) según preferencia',
          'Perfecto para feedback positivo',
          'Usa ease-in-out para movimiento natural'
        ]}
      />

      <AnimationDemo
        title="bounceIn"
        description="Entrada con rebote. Aparición dramática con efecto elástico."
        cssCode={`@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.bounce-in {
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`}
        jsxCode={`<div className="alert-success bounce-in">
  ✅ ¡Operación completada!
</div>

<div className="modal bounce-in">
  <h2>Importante</h2>
  <p>Mensaje destacado</p>
</div>`}
        preview={
          <div className="preview-box bounce-in-demo">
            <div style={{padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', maxWidth: '250px'}}>
              <h3 style={{margin: '0 0 0.5rem', color: '#2c3e50'}}>✅ Éxito</h3>
              <p style={{margin: 0, color: '#5a6c7d'}}>Guardado correctamente</p>
            </div>
          </div>
        }
        useCases={[
          'Alertas de éxito importantes',
          'Modales que requieren atención',
          'Notificaciones de logros',
          'Confirmaciones visuales',
          'Elementos de gamificación'
        ]}
        tips={[
          'El cubic-bezier añade el efecto elástico',
          'Duración de 0.6-1s para impacto sin ser molesto',
          'Perfecto para feedback de acciones exitosas',
          'Combina con fadeIn para suavizar entrada'
        ]}
      />

      <AnimationDemo
        title="rubberBand"
        description="Estiramiento elástico. Efecto de banda de goma que se estira y contrae."
        cssCode={`@keyframes rubberBand {
  0%, 100% {
    transform: scale(1);
  }
  30% {
    transform: scaleX(1.25) scaleY(0.75);
  }
  40% {
    transform: scaleX(0.75) scaleY(1.25);
  }
  50% {
    transform: scaleX(1.15) scaleY(0.85);
  }
  65% {
    transform: scaleX(0.95) scaleY(1.05);
  }
  75% {
    transform: scaleX(1.05) scaleY(0.95);
  }
}

.rubber-band {
  animation: rubberBand 1s ease-in-out;
}`}
        jsxCode={`// Aplicar en evento de validación
<input 
  className={isInvalid ? 'rubber-band' : ''}
  onAnimationEnd={() => setIsInvalid(false)}
/>

<button onClick={handleClick} 
        className="submit-btn rubber-band">
  Enviar
</button>`}
        preview={
          <div className="preview-box rubber-band-demo">
            <div style={{padding: '1rem 2rem', background: '#ff9800', color: 'white', borderRadius: '8px', fontWeight: 'bold'}}>
              🎭 RubberBand
            </div>
          </div>
        }
        useCases={[
          'Validaciones de formulario',
          'Feedback de usuario sobre errores',
          'Elementos que responden a interacción',
          'Botones al hacer clic',
          'Indicadores de acción realizada'
        ]}
        tips={[
          'Usa solo una vez por evento (no infinite)',
          'Perfecto para llamar atención sobre errores',
          'Combina con cambio de color para enfatizar',
          'Elimina la clase después de la animación'
        ]}
      />

      <AnimationDemo
        title="jello"
        description="Movimiento gelatinoso. Oscilación divertida y juguetona."
        cssCode={`@keyframes jello {
  0%, 100% {
    transform: skewX(0deg) skewY(0deg);
  }
  30% {
    transform: skewX(25deg) skewY(-25deg);
  }
  40% {
    transform: skewX(-15deg) skewY(15deg);
  }
  50% {
    transform: skewX(15deg) skewY(-15deg);
  }
  65% {
    transform: skewX(-5deg) skewY(5deg);
  }
  75% {
    transform: skewX(5deg) skewY(-5deg);
  }
}

.jello {
  animation: jello 1s ease-in-out;
}`}
        jsxCode={`<div className="fun-element jello">
  🎮 ¡Jugar!
</div>

<button className="game-button" 
        onClick={handleClick}>
  <span className="jello">🎲</span>
  Tirar dado
</button>`}
        preview={
          <div className="preview-box jello-demo">
            <div style={{fontSize: '4rem'}}>🎮</div>
          </div>
        }
        useCases={[
          'Elementos divertidos y casuales',
          'Gamificación e interfaces de juegos',
          'Botones en aplicaciones infantiles',
          'Reacciones a hover divertidas',
          'Elementos con personalidad juguetona'
        ]}
        tips={[
          'Los valores de skew crean el efecto gelatinoso',
          'Usa con moderación por su naturaleza llamativa',
          'Perfecto para público joven o contextos lúdicos',
          'Combina con colores vibrantes'
        ]}
      />
    </div>
  );
};

export default RebotePage;
