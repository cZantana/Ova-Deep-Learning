import React, { useEffect, useState } from 'react';
import pipwerks from 'pipwerks-scorm-api-wrapper';
import './App.css';

function App() {
  const [scormStatus, setScormStatus] = useState('No inicializado');

  useEffect(() => {
    // Intentar inicializar la comunicación SCORM
    const initSuccess = pipwerks.SCORM.init();
    if (initSuccess) {
      setScormStatus('SCORM inicializado correctamente');
    } else {
      setScormStatus('Error al inicializar SCORM');
    }

    return () => {
      // Verificar si el método finish existe antes de llamarlo
      if (typeof pipwerks.SCORM.finish === 'function') {
        pipwerks.SCORM.finish();
      } else {
        console.warn('pipwerks.SCORM.finish no está disponible.');
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>Demo Curso SCORM con React y Vite</h1>
      <p>Status: {scormStatus}</p>
      <p>Si SCORM se inicializó, el LMS recibirá esta información.</p>
    </div>
  );
}

export default App;
