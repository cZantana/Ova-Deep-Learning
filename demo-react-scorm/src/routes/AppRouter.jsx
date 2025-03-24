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
import Semana9 from '../pages/Semana 9/semana9';
import Semana10 from '../pages/Semana 10/semana10';
import Semana11 from '../pages/Semana 11/semana11';
import Semana12 from '../pages/Semana 12/semana12';
import Semana13 from '../pages/Semana 13/semana13';
import Semana14 from '../pages/Semana 14/semana14';
import Semana15 from '../pages/Semana 15/semana15';
import Semana16 from '../pages/Semana 16/semana16';






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
        <Route path="/semana9" element={<Semana9 />} />
        <Route path="/semana10" element={<Semana10/>} />
        <Route path="/semana11" element={<Semana11 />} />
        <Route path="/semana12" element={<Semana12 />} />
        <Route path="/semana13" element={<Semana13 />} />
        <Route path="/semana14" element={<Semana14 />} />
        <Route path="/semana15" element={<Semana15 />} />
        <Route path="/semana16" element={<Semana16 />} />
      </Routes>
    </Router>
  );
}
