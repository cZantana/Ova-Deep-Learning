// src/routes/AppRouter.jsx
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz1 from '../pages/Quiz1';
import Quiz2 from '../pages/Quiz2';
import Notas from '../pages/Notas';
import Semana1 from '../pages/Semana 1/semana1';
import Semana2 from '../pages/Semana 2/semana2';
import Semana3 from '../pages/Semana 3/semana3';


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/Notas" element={<Notas />} />
        <Route path="/semana1" element={<Semana1 />} />
        <Route path="/semana2" element={<Semana2 />} />
        <Route path="/semana3" element={<Semana3 />} />
      </Routes>
    </Router>
  );
}
