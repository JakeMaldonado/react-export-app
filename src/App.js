import React from 'react';
import 'antd/dist/antd.css';
import './index.css';

import Nav from './components/Nav';
import Exports from './components/Exports';

function App() {
  return (
    <div className="App">
      <Nav />
      <Exports />
    </div>
  );
}

export default App;
