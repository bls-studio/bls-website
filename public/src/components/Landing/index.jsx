import React from 'react';
import './home.scss';

const Home = () => (
  <div id="home" className="parallax__group">
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <div className="parallax__overlay"></div>
        {/* <div>sample background</div> */}
      </div>
      <div className="parallax__layer parallax__layer--base">
        <h3 className="tagline">A creative web development agency.</h3>
      </div>
    </div>

  </div>
);

export default Home;
  {/* <div id="home">
    <div className="home-container">
      <div className="home-left">
        <h3 className="tagline">A creative web development agency.</h3>
      </div>
      <div className="home-right">
        <div className="home-right-overlay">
          
        </div>
      </div>
    </div>
  </div> */}