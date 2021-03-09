import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const checkModo = (process.env.REACT_APP_MODE === 'development')
    ? 'Em desenvolvimento' : null;
  return (
    <div className="App">
      <p>{checkModo}</p>
      <StrangerThings />
    </div>
  );
}

export default App;
