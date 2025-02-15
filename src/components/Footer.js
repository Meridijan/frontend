import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <div className="FooterSection">
          <h2>Contact</h2>
          <p><a href="mailto:meridijaninfo@gmail.com">Email Us</a></p>
        </div>
        <div className="FooterSection">
          <h2>Links</h2>
          <ul>
            <li><a href="https://www.instagram.com/meridian.info/">Instagram</a></li>
            <li><a href="https://dsc.gg/meridianmc">Discord</a></li>
            <li><a href="https://www.youtube.com/@MeridianMc">YouTube</a></li>
            <li><a href="https://minecraft-mp.com/server-s332578">Vote</a></li>
          </ul>
        </div>
      </div>
      <p className="Copyright">© 2025 Meridian MC | All rights reserved.</p>
    </footer>
  );
}

export default Footer;
