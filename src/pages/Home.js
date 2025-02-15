import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductListings from '../components/ProductListings';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductListings />
      <Footer />
    </div>
  );
}

export default Home;
