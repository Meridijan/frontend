import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import VidLogo from '../assets/img/withoutstroke.webm';
import '../styles/Navbar.css';

function Navbar() {
  const preloadedVideo = document.createElement("video");

  preloadedVideo.src = VidLogo;
  preloadedVideo.preload = "auto";

  return (
    <div className="Navbar">
      
      {/* Left-side lniks */}
      <div className="LeftNavSection">
        <Link to ="/">Home</Link>
        <Link to="/creators">Creators</Link>
        <Link to ="/about">About Us</Link>
      </div>

      {/* Centered Logo */}
      <div className="LogoContainer">
        <a 
          href="https://dsc.gg/meridianmc" 
          className="Discord"
        >
            <video className='Logo' autoPlay loop muted playsInline>
              <source src={VidLogo} type='video/webm'/>
            </video>
          
        </a>
      </div>

      {/* Right-side Links */}
      <div className="RightNavSection">
        <Link to ="/community">Community</Link>
        <Link to ="/wiki">Wiki</Link>
        <Link to="/login">Login</Link>
        <Link to="/basket" className='BasketIcon'>
          <FaShoppingBasket />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
