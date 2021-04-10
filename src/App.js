import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <p>
        {process.env.REACT_APP_ENV === 'true' ? 'Em desenvolvimento' : null}
      </p>
      <StrangerThings />
    </div>
  );
}

export default App;
