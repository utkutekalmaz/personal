import React from 'react';
import './App.css';
import { Container } from './comp/Container';
import moduleName from './context/ThemeState';
import ThemeState from './context/ThemeState';

function App() {
  return (
    <ThemeState>
      <div className='App'>
        <Container />
      </div>
    </ThemeState>
  );
}

export default App;
