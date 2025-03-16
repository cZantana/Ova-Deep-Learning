// src/routes/AppRouter.jsx
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz1 from '../pages/Quiz1';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        
      </Routes>
    </Router>
  );
}
