import React from 'react';
import './navbar.scss';
import { push as Menu } from 'react-burger-menu';


const Navbar = () => (
  <div id="navbar">
    <div className="navbar-logo"><h1>BLS</h1></div>
    <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item"><a href="">Home</a></li>
          <li className="navbar-item"><a href="">About</a></li>
          <li className="navbar-item"><a href="">Works</a></li>
          <li className="navbar-item"><a href="">Contact</a></li>
        </ul>
      </nav>
    </Menu>

    {/* <div className="navbar-desktop">
      <div className="navbar-logo">Logo</div>
    </div> */}
  </div>
);

export default Navbar;