import React from 'react';

import './global.scss';

// Componenets
import Navbar from '../Navbar';
import Home from '../Landing';
import About from '../About';

const App = () => (
  <div className="parallax">
    <Navbar/>
    <Home className="parallax__group"/>
    <About className="parallax__group"/>
  </div>
);

export default App;