import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedProjects from './FeaturedProjects';
import ServicesSection from './ServicesSection';
import Technologies from './Technologies';
import AboutMeSection from './AboutMeSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    
    // Refresh AOS on hash changes (fallback)
    window.addEventListener('hashchange', () => {
      setTimeout(() => AOS.refresh(), 500);
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <Technologies />
      <AboutMeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />  
    </>
  );
};

export default App;
