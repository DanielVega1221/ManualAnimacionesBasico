import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [particles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 10 + Math.random() * 20,
      type: ['⭐', '✨', '💫', '🦄', '🎨', '💖', '🌈'][Math.floor(Math.random() * 7)]
    }))
  );

  const [decorElements] = useState(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      type: ['🚀', '🎯', '⚡', '🌟', '🎪', '🎭'][i],
      left: 10 + (i * 15),
      delay: i * 0.15
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="splash-background">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`
          }}
        >
          {particle.type}
        </div>
      ))}

      <div className="splash-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="splash-logo" />
        </div>

        <h1 className="splash-title">
          <span className="word word1">Manual</span>
          <span className="word word2">de</span>
          <span className="word word3">Animaciones</span>
          <span className="word word4">CSS</span>
        </h1>

        <div className="decor-elements">
          {decorElements.map((elem) => (
            <span
              key={elem.id}
              className="decor-icon"
              style={{
                left: `${elem.left}%`,
                animationDelay: `${elem.delay}s`
              }}
            >
              {elem.type}
            </span>
          ))}
        </div>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
