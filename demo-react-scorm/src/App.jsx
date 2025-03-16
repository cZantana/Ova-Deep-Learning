// src/App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter';
import SCORMProvider from './context/SCORMProvider';

function App() {
  return (
    <SCORMProvider>
    <div className="App">
      <AppRouter />
    </div>
    </SCORMProvider>
  );
}

export default App;
