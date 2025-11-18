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
  tips 
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="animation-demo">
      <div className="demo-header">
        <h2 className="demo-title">{title}</h2>
        <p className="demo-description">{description}</p>
      </div>

      <div className="demo-preview-section">
        <div className="demo-controls">
          <button 
            className={`control-btn ${isPlaying ? 'pause' : 'play'}`}
            onClick={toggleAnimation}
          >
            {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
          </button>
          
          <div className="speed-control">
            <label>Velocidad:</label>
            <select 
              value={speed} 
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
            >
              <option value="0.5">0.5x (Lenta)</option>
              <option value="1">1x (Normal)</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x (Rápida)</option>
            </select>
          </div>
        </div>

        <div className="demo-preview">
          <div 
            className={`preview-container ${!isPlaying ? 'paused' : ''}`}
            style={{ '--animation-speed': speed }}
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
