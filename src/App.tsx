import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Features from './components/layout/Features';
import Pricelist from './components/layout/Pricelist';
import Barbers from './components/layout/Barbers';
import BookingWidget from './components/booking/BookingWidget';
import Gallery from './components/layout/Gallery';
import Location from './components/layout/Location';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricelist />
        <Barbers />
        <BookingWidget />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
};

export default App;
