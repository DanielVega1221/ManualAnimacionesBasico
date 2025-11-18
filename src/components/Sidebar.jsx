import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    { path: '/', name: '🏠 Inicio', exact: true },
    { path: '/entrada', name: '➡️ Animaciones de Entrada' },
    { path: '/salida', name: '⬅️ Animaciones de Salida' },
    { path: '/brillo', name: '✨ Efectos de Brillo' },
    { path: '/pulsacion', name: '💓 Efectos de Pulsación' },
    { path: '/flotacion', name: '🎈 Efectos de Flotación' },
    { path: '/rotacion', name: '🔄 Efectos de Rotación' },
    { path: '/rebote', name: '⬆️ Efectos de Rebote' },
    { path: '/sacudida', name: '⚡ Efectos de Sacudida' },
    { path: '/texto', name: '📝 Efectos de Texto' },
    { path: '/hover', name: '👆 Efectos de Hover' },
    { path: '/fondo', name: '🎨 Efectos de Fondo' },
    { path: '/carga', name: '⏳ Efectos de Carga' },
    { path: '/especiales', name: '🎭 Efectos Especiales' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Manual de Animaciones</h1>
        <p className="sidebar-subtitle">CSS & React</p>
        <p className="sidebar-subtitle" style={{fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.9}}>UXnicorp</p>
      </div>
      
      <nav className="sidebar-nav">
        {categories.map((category) => (
          <NavLink
            key={category.path}
            to={category.path}
            end={category.exact}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <p>Hecho con amor para los UXnicornios de UXnicorp</p>
        <p style={{fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.7}}>Aprende, experimenta y crea magia</p>
      </div>
    </aside>
  );
};

export default Sidebar;
