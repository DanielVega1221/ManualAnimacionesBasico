import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EntradaPage from './pages/EntradaPage';
import SalidaPage from './pages/SalidaPage';
import BrilloPage from './pages/BrilloPage';
import PulsacionPage from './pages/PulsacionPage';
import FlotacionPage from './pages/FlotacionPage';
import RotacionPage from './pages/RotacionPage';
import RebotePage from './pages/RebotePage';
import SacudidaPage from './pages/SacudidaPage';
import TextoPage from './pages/TextoPage';
import HoverPage from './pages/HoverPage';
import FondoPage from './pages/FondoPage';
import CargaPage from './pages/CargaPage';
import EspecialesPage from './pages/EspecialesPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="entrada" element={<EntradaPage />} />
          <Route path="salida" element={<SalidaPage />} />
          <Route path="brillo" element={<BrilloPage />} />
          <Route path="pulsacion" element={<PulsacionPage />} />
          <Route path="flotacion" element={<FlotacionPage />} />
          <Route path="rotacion" element={<RotacionPage />} />
          <Route path="rebote" element={<RebotePage />} />
          <Route path="sacudida" element={<SacudidaPage />} />
          <Route path="texto" element={<TextoPage />} />
          <Route path="hover" element={<HoverPage />} />
          <Route path="fondo" element={<FondoPage />} />
          <Route path="carga" element={<CargaPage />} />
          <Route path="especiales" element={<EspecialesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
