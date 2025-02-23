import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Wiki from './pages/Wiki';
import Login from './pages/Login';
//import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
