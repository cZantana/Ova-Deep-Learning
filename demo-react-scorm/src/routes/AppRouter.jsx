// src/routes/AppRouter.jsx
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz1 from '../pages/Quiz1';
import Quiz2 from '../pages/Quiz2';
import Notas from '../pages/Notas';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/Notas" element={<Notas />} />
      </Routes>
    </Router>
  );
}
