import './AnimationsPage.css';
import './RecursosPage.css';

const RecursosPage = () => {
  return (
    <div className="animations-page recursos-page">
      <div className="page-header">
        <h1>📚 Recursos y Aprendizaje</h1>
        <p>Guía completa de conceptos, glosario y recursos adicionales para dominar las animaciones CSS.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem', color: '#FFB3D9', fontWeight: '600'}}>Tu machete definitivo - UXnicorp</p>
      </div>

      {/* Glosario de Términos */}
      <section className="resources-section">
        <h2 className="section-title">📖 Glosario de Términos CSS</h2>
        <div className="glossary-grid">
          <div className="glossary-item">
            <h3>@keyframes</h3>
            <p><strong>Qué es:</strong> Define los pasos de una animación CSS.</p>
            <p><strong>Cómo usarlo:</strong> Especifica qué estilos debe tener un elemento en diferentes momentos de la animación.</p>
            <code className="inline-code">@keyframes nombreAnimacion {'{'}...{'}'}</code>
          </div>

          <div className="glossary-item">
            <h3>animation-duration</h3>
            <p><strong>Qué es:</strong> Tiempo que tarda la animación en completarse.</p>
            <p><strong>Valores comunes:</strong> 0.5s (rápida), 1s (normal), 2s (lenta)</p>
            <code className="inline-code">animation-duration: 1s;</code>
          </div>

          <div className="glossary-item">
            <h3>animation-timing-function</h3>
            <p><strong>Qué es:</strong> Controla la aceleración de la animación.</p>
            <p><strong>Valores:</strong> ease (por defecto), ease-in, ease-out, ease-in-out, linear</p>
            <code className="inline-code">animation-timing-function: ease-out;</code>
          </div>

          <div className="glossary-item">
            <h3>animation-delay</h3>
            <p><strong>Qué es:</strong> Tiempo de espera antes de iniciar la animación.</p>
            <p><strong>Uso típico:</strong> Para crear animaciones escalonadas</p>
            <code className="inline-code">animation-delay: 0.2s;</code>
          </div>

          <div className="glossary-item">
            <h3>animation-iteration-count</h3>
            <p><strong>Qué es:</strong> Número de veces que se repite la animación.</p>
            <p><strong>Valores:</strong> 1, 2, 3... o infinite (infinito)</p>
            <code className="inline-code">animation-iteration-count: infinite;</code>
          </div>

          <div className="glossary-item">
            <h3>animation-direction</h3>
            <p><strong>Qué es:</strong> Dirección de reproducción de la animación.</p>
            <p><strong>Valores:</strong> normal, reverse, alternate, alternate-reverse</p>
            <code className="inline-code">animation-direction: alternate;</code>
          </div>

          <div className="glossary-item">
            <h3>animation-fill-mode</h3>
            <p><strong>Qué es:</strong> Estilos aplicados antes/después de la animación.</p>
            <p><strong>Valores:</strong> none, forwards (mantiene final), backwards, both</p>
            <code className="inline-code">animation-fill-mode: forwards;</code>
          </div>

          <div className="glossary-item">
            <h3>transform</h3>
            <p><strong>Qué es:</strong> Modifica la posición, escala, rotación del elemento.</p>
            <p><strong>Funciones:</strong> translate, rotate, scale, skew</p>
            <code className="inline-code">transform: translateX(20px) rotate(45deg);</code>
          </div>

          <div className="glossary-item">
            <h3>opacity</h3>
            <p><strong>Qué es:</strong> Transparencia del elemento (0 = invisible, 1 = visible).</p>
            <p><strong>Uso común:</strong> Efectos de fadeIn/fadeOut</p>
            <code className="inline-code">opacity: 0.5;</code>
          </div>

          <div className="glossary-item">
            <h3>cubic-bezier</h3>
            <p><strong>Qué es:</strong> Función de tiempo personalizada para animaciones únicas.</p>
            <p><strong>Ejemplo:</strong> Efecto de rebote suave</p>
            <code className="inline-code">cubic-bezier(0.68, -0.55, 0.265, 1.55)</code>
          </div>
        </div>
      </section>

      {/* Propiedades Animables */}
      <section className="resources-section">
        <h2 className="section-title">✨ Propiedades que Puedes Animar</h2>
        <div className="properties-grid">
          <div className="property-category">
            <h3>🎨 Visuales</h3>
            <ul>
              <li><code>opacity</code> - Transparencia</li>
              <li><code>color</code> - Color de texto</li>
              <li><code>background-color</code> - Color de fondo</li>
              <li><code>border-color</code> - Color de borde</li>
              <li><code>box-shadow</code> - Sombras</li>
            </ul>
          </div>

          <div className="property-category">
            <h3>📐 Transformaciones</h3>
            <ul>
              <li><code>translate()</code> - Mover posición</li>
              <li><code>rotate()</code> - Rotar</li>
              <li><code>scale()</code> - Cambiar tamaño</li>
              <li><code>skew()</code> - Inclinar</li>
            </ul>
          </div>

          <div className="property-category">
            <h3>📏 Dimensiones</h3>
            <ul>
              <li><code>width</code> - Ancho</li>
              <li><code>height</code> - Alto</li>
              <li><code>margin</code> - Márgenes</li>
              <li><code>padding</code> - Espaciado interno</li>
            </ul>
          </div>

          <div className="property-category">
            <h3>📍 Posición</h3>
            <ul>
              <li><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></li>
              <li><code>z-index</code> - Orden de capas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips de Performance */}
      <section className="resources-section tips-performance">
        <h2 className="section-title">⚡ Tips de Performance</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🎯</div>
            <h3>Usa Transform en lugar de Position</h3>
            <p><strong>✅ Bueno:</strong> <code>transform: translateX(100px)</code></p>
            <p><strong>❌ Evita:</strong> <code>left: 100px</code></p>
            <p className="tip-reason">Transform usa GPU y es mucho más rápido</p>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🚀</div>
            <h3>Anima Opacity y Transform</h3>
            <p>Estas propiedades no causan reflow del navegador</p>
            <p className="tip-reason">Animaciones más suaves y fluidas</p>
          </div>

          <div className="tip-card">
            <div className="tip-icon">⏱️</div>
            <h3>Duraciones Apropiadas</h3>
            <p><strong>Micro-interacciones:</strong> 0.1s - 0.3s</p>
            <p><strong>Transiciones:</strong> 0.3s - 0.5s</p>
            <p><strong>Animaciones complejas:</strong> 0.5s - 1s</p>
            <p className="tip-reason">Nunca más de 3 segundos</p>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🎬</div>
            <h3>will-change Property</h3>
            <p><code>will-change: transform</code></p>
            <p className="tip-reason">Avisa al navegador para optimizar, pero úsalo con moderación</p>
          </div>
        </div>
      </section>

      {/* Timing Functions Visual */}
      <section className="resources-section">
        <h2 className="section-title">⏰ Timing Functions Explicadas</h2>
        <div className="timing-functions">
          <div className="timing-card">
            <h3>linear</h3>
            <p>Velocidad constante de inicio a fin</p>
            <p><strong>Uso:</strong> Rotaciones, progress bars</p>
            <div className="timing-demo linear-demo">
              <div className="timing-ball"></div>
            </div>
          </div>

          <div className="timing-card">
            <h3>ease</h3>
            <p>Comienza lento, acelera, termina lento (por defecto)</p>
            <p><strong>Uso:</strong> Mayoría de animaciones</p>
            <div className="timing-demo ease-demo">
              <div className="timing-ball"></div>
            </div>
          </div>

          <div className="timing-card">
            <h3>ease-in</h3>
            <p>Comienza lento, acelera al final</p>
            <p><strong>Uso:</strong> Elementos que salen</p>
            <div className="timing-demo ease-in-demo">
              <div className="timing-ball"></div>
            </div>
          </div>

          <div className="timing-card">
            <h3>ease-out</h3>
            <p>Comienza rápido, desacelera al final</p>
            <p><strong>Uso:</strong> Elementos que entran (¡el más común!)</p>
            <div className="timing-demo ease-out-demo">
              <div className="timing-ball"></div>
            </div>
          </div>

          <div className="timing-card">
            <h3>ease-in-out</h3>
            <p>Lento al inicio y al final</p>
            <p><strong>Uso:</strong> Animaciones simétricas</p>
            <div className="timing-demo ease-in-out-demo">
              <div className="timing-ball"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reglas de Oro */}
      <section className="resources-section">
        <h2 className="section-title">🏆 Reglas de Oro UXnicorp</h2>
        <div className="golden-rules">
          <div className="rule">
            <span className="rule-number">1</span>
            <div className="rule-content">
              <h3>Menos es Más</h3>
              <p>No animes todo. Usa animaciones para guiar la atención del usuario.</p>
            </div>
          </div>

          <div className="rule">
            <span className="rule-number">2</span>
            <div className="rule-content">
              <h3>Consistencia</h3>
              <p>Usa las mismas duraciones y timing functions en toda tu app.</p>
            </div>
          </div>

          <div className="rule">
            <span className="rule-number">3</span>
            <div className="rule-content">
              <h3>Respeta las Preferencias</h3>
              <p>Usa <code>prefers-reduced-motion</code> para usuarios sensibles al movimiento.</p>
              <code className="rule-code">
                @media (prefers-reduced-motion: reduce) {'{\n'}
                  * {'{\n'}
                    animation: none !important;
                  {'}\n'}
                {'}'}
              </code>
            </div>
          </div>

          <div className="rule">
            <span className="rule-number">4</span>
            <div className="rule-content">
              <h3>Propósito Claro</h3>
              <p>Cada animación debe tener un propósito: feedback, guiar atención, o deleitar.</p>
            </div>
          </div>

          <div className="rule">
            <span className="rule-number">5</span>
            <div className="rule-content">
              <h3>Testea en Móvil</h3>
              <p>Las animaciones pueden ser más lentas en dispositivos móviles. Siempre prueba.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Externos */}
      <section className="resources-section">
        <h2 className="section-title">🔗 Recursos Adicionales</h2>
        <div className="external-resources">
          <div className="resource-link">
            <h3>🎮 Práctica Interactiva</h3>
            <ul>
              <li><a href="https://animate.style/" target="_blank" rel="noopener noreferrer">Animate.css</a> - Librería de animaciones listas</li>
              <li><a href="https://cubic-bezier.com/" target="_blank" rel="noopener noreferrer">Cubic-bezier.com</a> - Generador visual de timing functions</li>
              <li><a href="https://animista.net/" target="_blank" rel="noopener noreferrer">Animista</a> - Generador de animaciones CSS</li>
            </ul>
          </div>

          <div className="resource-link">
            <h3>📚 Documentación</h3>
            <ul>
              <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations/Using_CSS_animations" target="_blank" rel="noopener noreferrer">MDN - Animaciones CSS</a></li>
              <li><a href="https://web.dev/animations/" target="_blank" rel="noopener noreferrer">Web.dev - Animaciones Performance</a></li>
            </ul>
          </div>

          <div className="resource-link">
            <h3>🎨 Inspiración</h3>
            <ul>
              <li><a href="https://codepen.io/search/pens?q=css+animation" target="_blank" rel="noopener noreferrer">CodePen CSS Animations</a></li>
              <li><a href="https://uimovement.com/" target="_blank" rel="noopener noreferrer">UI Movement</a> - Inspiración de animaciones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cheatsheet Rápido */}
      <section className="resources-section cheatsheet">
        <h2 className="section-title">⚡ Cheatsheet Rápido</h2>
        <div className="cheatsheet-content">
          <h3>Sintaxis Completa de Animation</h3>
          <pre className="cheat-code">
{`animation: nombre duración timing-function delay iteration-count direction fill-mode;

/* Ejemplo completo */
animation: slideIn 0.5s ease-out 0.1s 1 normal forwards;

/* Forma abreviada más común */
animation: slideIn 0.5s ease-out;`}
          </pre>

          <h3>Shortcut: Transform Multiple</h3>
          <pre className="cheat-code">
{`/* Múltiples transformaciones en una línea */
transform: translateX(20px) translateY(-10px) rotate(45deg) scale(1.2);

/* El orden importa! Diferentes órdenes = diferentes resultados */`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default RecursosPage;
