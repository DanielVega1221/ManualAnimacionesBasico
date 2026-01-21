import { useState } from 'react';
import CodeBlock from './CodeBlock';
import './AnimationDemo.css';

const AnimationDemo = ({ 
  title, 
  description, 
  cssCode, 
  jsxCode, 
  preview, 
  useCases,
  tips,
  difficulty = 'intermedio', // 'principiante', 'intermedio', 'avanzado'
  browserSupport = 'Todos los navegadores modernos'
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    // Forzar re-render cambiando la key del contenedor
    setAnimationKey(prev => prev + 1);
    setIsPlaying(true);
  };

  const getDifficultyColor = () => {
    switch(difficulty) {
      case 'principiante': return '#95F0D0';
      case 'intermedio': return '#FFB5E8';
      case 'avanzado': return '#FFA07A';
      default: return '#FFB5E8';
    }
  };

  const getDifficultyLabel = () => {
    switch(difficulty) {
      case 'principiante': return '🟢 Principiante';
      case 'intermedio': return '🟡 Intermedio';
      case 'avanzado': return '🔴 Avanzado';
      default: return '🟡 Intermedio';
    }
  };

  return (
    <div className="animation-demo">
      <div className="demo-header">
        <div className="header-top">
          <h2 className="demo-title">{title}</h2>
          <div className="badges">
            <span className="badge difficulty-badge" style={{ background: getDifficultyColor() }}>
              {getDifficultyLabel()}
            </span>
            <span className="badge support-badge" title={browserSupport}>
              🌐 Compatible
            </span>
          </div>
        </div>
        <p className="demo-description">{description}</p>
      </div>

      <div className="demo-preview-section">
        <div className="demo-controls">
          <button 
            className={`control-btn ${isPlaying ? 'pause' : 'play'}`}
            onClick={toggleAnimation}
            aria-label={isPlaying ? 'Pausar animación' : 'Reproducir animación'}
          >
            {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
          </button>

          <button 
            className="control-btn reset"
            onClick={resetAnimation}
            aria-label="Reiniciar animación"
          >
            🔄 Reiniciar
          </button>
          
          <div className="speed-control">
            <label htmlFor={`speed-${title}`}>Velocidad:</label>
            <select 
              id={`speed-${title}`}
              value={speed} 
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              aria-label="Controlar velocidad de animación"
            >
              <option value="0.25">0.25x (Muy lenta)</option>
              <option value="0.5">0.5x (Lenta)</option>
              <option value="1">1x (Normal)</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x (Rápida)</option>
              <option value="3">3x (Muy rápida)</option>
            </select>
          </div>
        </div>

        <div className="demo-preview">
          <div 
            key={animationKey}
            className={`preview-container ${!isPlaying ? 'paused' : ''}`}
            style={{ 
              '--animation-speed': speed
            }}
          >
            {preview}
          </div>
        </div>
      </div>

      <div className="demo-info">
        <div className="info-section">
          <h3>📍 ¿Dónde aplicarlo?</h3>
          <ul className="use-cases-list">
            {useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>

        {tips && (
          <div className="info-section tips-section">
            <h3>💡 Tips y Recomendaciones</h3>
            <ul className="tips-list">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="demo-code-section">
        <h3 className="code-section-title">📝 Código CSS</h3>
        <CodeBlock code={cssCode} language="CSS" />

        <h3 className="code-section-title">⚛️ Código JSX</h3>
        <CodeBlock code={jsxCode} language="JSX" />
      </div>
    </div>
  );
};

export default AnimationDemo;
