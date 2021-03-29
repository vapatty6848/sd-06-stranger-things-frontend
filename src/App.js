import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      <StrangerThings />
      { (process.env.REACT_APP_DEV_MODE === 'true')
        ? <div className="dev-label">Em desenvolvimento</div>
        : null }
    </div>
  );
}

export default App;
