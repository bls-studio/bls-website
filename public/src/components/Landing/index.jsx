import React from 'react';
import './home.scss';

const Home = () => (
  <div id="home" className="parallax__group">
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <div className="parallax__overlay"></div>
      </div>
      <div className="parallax__layer parallax__layer--base">
        <h3 className="tagline">A creative web development studio.</h3>
      </div>
      <div className="home-static">
        <p className="home-tagline">Connecting through code, design, & innovation.</p>
      </div>
    </div>
    {/* <div className="home-background-overlap"></div> */}
  </div>
);

export default Home;