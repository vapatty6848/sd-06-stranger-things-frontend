import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { (process.env.DEV_MODE === 'true')
        ? <div className="dev-label">Em desenvolvimento</div>
        : null }
      <StrangerThings />
    </div>
  );
}

export default App;
