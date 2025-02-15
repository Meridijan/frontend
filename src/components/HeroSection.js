import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="HeroSection">
      <h1>MERIDIAN</h1>
      <p>Meridian is a community dedicated to<br /> creating a Minecraft server for everyone</p>
      <button>JOIN NOW</button>

      {/* Hand-Drawn Medieval Line with Arrow */}
      <div className="ScrollHintContainer">
        <svg className="ScrollLine LeftLine" width="50%" height="80" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- Left line with medieval curve --> */}
          <path d="M0 40 C50 -10, 200 90, 400 40" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>

        <div className="ScrollButton" onClick={scrollToNextSection}>
          <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="22" stroke="white" strokeWidth="4" fill="transparent" />
            <path d="M15 20 L25 30 L35 20" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <svg className="ScrollLine RightLine" width="50%" height="80" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- Right line with medieval curve --> */}
          <path d="M0 40 C200 -10, 350 90, 400 40" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
