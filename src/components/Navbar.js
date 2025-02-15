import React from 'react';
import discordLogo from '../assets/img/mrdn.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      
      {/* Left-side lniks */}
      <div className="NavLinks">
        <Link to ="/">Home</Link>
        <Link to ="/about">About Us</Link>
      </div>

      {/* Centered Logo */}
      <div className="LogoContainer">
        <a href="https://dsc.gg/meridianmc" className="Discord">
          <img src={discordLogo} alt="Discord" />
        </a>
      </div>

      {/* Right-side Links */}
      <div className="NavLinks">
        <Link to="/creators">Creators</Link>
        <Link to="/basket">Basket</Link>
      </div>
    </div>
  );
}

export default Navbar;
