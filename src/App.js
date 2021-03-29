import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      <p>
        {
          process.env.REACT_APP_DEV_MODE === 'true' ? 'Em desenvolvimento' : null
        }
      </p>
      <StrangerThings />
    </div>
  );
}

export default App;
