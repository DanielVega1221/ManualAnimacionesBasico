import AnimationDemo from '../components/AnimationDemo';
import './AnimationsPage.css';

const SacudidaPage = () => {
  return (
    <div className="animations-page">
      <div className="page-header">
        <h1>Efectos de Sacudida y Atención</h1>
        <p>Animaciones que llaman la atención mediante movimientos de sacudida y vibración.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Manual UXnicorp</p>
      </div>

      <AnimationDemo
        title="shake"
        description="Sacudida horizontal rápida. Efecto de negación o error."
        cssCode={`@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

.shake {
  animation: shake 0.5s ease-in-out;
}`}
        jsxCode={`// En componente con estado de error
<input 
  className={hasError ? 'shake' : ''}
  onAnimationEnd={() => setHasError(false)}
/>

<div className="error-message shake">
  ❌ Email inválido
</div>`}
        preview={
          <div className="preview-box shake-demo">
            <div style={{padding: '1rem 2rem', background: '#f44336', color: 'white', borderRadius: '8px', fontWeight: 'bold'}}>
              ❌ Error
            </div>
          </div>
        }
        useCases={[
          'Errores en formularios',
          'Campos de input inválidos',
          'Mensajes de error',
          'Validaciones fallidas',
          'Feedback negativo de usuario'
        ]}
        tips={[
          'Duración corta (0.4-0.6s) para no molestar',
          'Perfecto para indicar "algo está mal"',
          'Combina con borde rojo para enfatizar error',
          'No uses infinite, solo una vez por evento'
        ]}
      />

      <AnimationDemo
        title="wobble"
        description="Oscilación con rotación. Movimiento de bamboleo llamativo."
        cssCode={`@keyframes wobble {
  0%, 100% {
    transform: translateX(0) rotate(0deg);
  }
  15% {
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    transform: translateX(-5%) rotate(-1deg);
  }
}

.wobble {
  animation: wobble 1s ease-in-out;
}`}
        jsxCode={`<div className="notification wobble">
  ⚠️ ¡Atención necesaria!
</div>

<button className="warning-btn" 
        onClick={handleWarning}>
  <span className="wobble">⚡</span>
  Acción importante
</button>`}
        preview={
          <div className="preview-box wobble-demo">
            <div style={{padding: '1rem 2rem', background: '#ff9800', color: 'white', borderRadius: '8px', fontWeight: 'bold'}}>
              ⚠️ Atención
            </div>
          </div>
        }
        useCases={[
          'Llamadas de atención suaves',
          'Advertencias y warnings',
          'Elementos que necesitan revisión',
          'Notificaciones importantes pero no críticas',
          'Botones que requieren consideración'
        ]}
        tips={[
          'La rotación añade más dinamismo que shake',
          'Usa para advertencias menos críticas que errores',
          'Combina con colores de advertencia (naranja, amarillo)',
          'Duración de 0.8-1.2s para efecto completo'
        ]}
      />

      <AnimationDemo
        title="headShake"
        description="Sacudida de cabeza. Movimiento de negación en 3D."
        cssCode={`@keyframes headShake {
  0%, 50%, 100% {
    transform: translateX(0) rotateY(0);
  }
  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }
}

.head-shake {
  animation: headShake 1s ease-in-out;
  transform-style: preserve-3d;
}`}
        jsxCode={`<div className="validation-failed head-shake">
  🚫 Contraseña incorrecta
</div>

<div className="avatar head-shake">
  <img src="avatar.jpg" alt="User" />
  <span className="status">No disponible</span>
</div>`}
        preview={
          <div className="preview-box head-shake-demo">
            <div style={{fontSize: '4rem'}}>🚫</div>
          </div>
        }
        useCases={[
          'Validaciones de contraseña fallidas',
          'Intentos de acceso denegado',
          'Respuestas negativas del sistema',
          'Elementos que indican "no permitido"',
          'Feedback de acción no autorizada'
        ]}
        tips={[
          'El efecto 3D (rotateY) añade profundidad',
          'Perfecto para feedback de "no" o "negado"',
          'Usa preserve-3d para efecto completo',
          'Más sutil que shake, mejor para errores críticos'
        ]}
      />

      <AnimationDemo
        title="heartBeat"
        description="Latido intenso. Pulsación doble para máxima atención."
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
        jsxCode={`<button className="emergency-button heart-beat">
  🚨 Emergencia
</button>

<div className="urgent-notification heart-beat">
  ⏰ ¡Tiempo limitado!
</div>`}
        preview={
          <div className="preview-box heart-beat-demo">
            <div style={{padding: '1rem 2rem', background: '#f44336', color: 'white', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.2rem'}}>
              🚨 Urgente
            </div>
          </div>
        }
        useCases={[
          'Botones de emergencia',
          'Notificaciones urgentes',
          'Alertas de tiempo limitado',
          'Elementos que requieren acción inmediata',
          'Indicadores de alta prioridad'
        ]}
        tips={[
          'La doble pulsación crea sensación de urgencia',
          'Úsalo solo para elementos realmente importantes',
          'Combina con colores de alerta (rojo)',
          'Considera desactivar después de X tiempo'
        ]}
      />
    </div>
  );
};

export default SacudidaPage;
