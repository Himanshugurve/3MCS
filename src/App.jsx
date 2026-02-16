import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import ClientShowcase from './sections/ClientShowcase';
import Footer from './components/layout/Footer';
import Technologies from './sections/Technologies';
import ContactUs from './sections/Contactus';
import './index.css';


function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <ClientShowcase />
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
