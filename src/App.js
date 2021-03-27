import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const { REACT_APP_ENV_MODE } = process.env;

function App() {
  return (
    <div className="App">
      <p>
        { REACT_APP_ENV_MODE === 'prod' ? 'Em produção' : null }
        { REACT_APP_ENV_MODE === 'dev' ? 'Em desenvolvimento' : null }
      </p>
      <StrangerThings />
    </div>
  );
}

export default App;
