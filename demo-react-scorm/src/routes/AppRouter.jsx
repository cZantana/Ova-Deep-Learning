// src/routes/AppRouter.jsx
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "../utils/ScrollToTop";
import Home from '../pages/Home';
import Quiz1 from '../pages/Quiz1';
import Quiz2 from '../pages/Quiz2';
import Notas from '../pages/Notas';
import Semana1 from '../pages/Semana 1/semana1';
import Semana2 from '../pages/Semana 2/semana2';
import Semana3 from '../pages/Semana 3/semana3';
import Semana4 from '../pages/Semana 4/semana4';
import Semana5 from '../pages/Semana 5/semana5';
import Semana6 from '../pages/Semana 6/semana6';
import Semana7 from '../pages/Semana 7/semana7';
import Semana8 from '../pages/Semana 8/semana8';






export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />  {/* Asegura que el scroll se reinicie en cada cambio de página */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/Notas" element={<Notas />} />
        <Route path="/semana1" element={<Semana1 />} />
        <Route path="/semana2" element={<Semana2 />} />
        <Route path="/semana3" element={<Semana3 />} />
        <Route path="/semana4" element={<Semana4 />} />
        <Route path="/semana5" element={<Semana5 />} />
        <Route path="/semana6" element={<Semana6 />} />
        <Route path="/semana7" element={<Semana7 />} />
        <Route path="/semana8" element={<Semana8 />} />

      </Routes>
    </Router>
  );
}
