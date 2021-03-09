import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

// para pushar
function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_ENV === 'development' && <h1>Em desenvolvimento</h1>}
      <StrangerThings />
    </div>
  );
}

export default App;
