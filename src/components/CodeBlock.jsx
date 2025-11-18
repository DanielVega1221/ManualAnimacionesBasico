import { useState } from 'react';
import './CodeBlock.css';

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-language">{language}</span>
        <button 
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? '✓ Copiado!' : '📋 Copiar'}
        </button>
      </div>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
