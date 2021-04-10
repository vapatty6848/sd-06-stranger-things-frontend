import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const developementMode = process.env.REACT_APP_ENV === 'development';
const RenderMode = developementMode && <h2> Em desenvolvimento</h2>;
function App() {
  return (
    <div className="App">
      {RenderMode}
      <StrangerThings />
    </div>
  );
}

export default App;
