import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_ENV && <h1>Em desenvolvimento</h1>}
      <h1>{process.env.REACT_APP_ENV}</h1>
      <StrangerThings />
    </div>
  );
}

export default App;
