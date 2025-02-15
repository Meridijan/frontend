import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/About.css';  // Create this file for styling

function About() {
  return (
    <div>
      <Navbar />
      <section className="AboutUs">
        <h1>About Us</h1>
        <p>Welcome to Meridijan! We are a passionate community dedicated to creating the best Minecraft servers for everyone.</p>
        <p>Our mission is to provide unique gameplay experiences, encourage creativity, and offer memorable moments to all players.</p>
      </section>
      <Footer />
    </div>
  );
}

export default About;
