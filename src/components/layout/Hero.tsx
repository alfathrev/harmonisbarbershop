import React from 'react';
import { Calendar } from 'lucide-react';
import '../../styles/Hero.css';
import storefrontImg from '../../assets/storefront.jpg';

const Hero: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="hero" className="hero-section">
      <div className="hero-grid container">
        
        {/* Left Side Content */}
        <div className="hero-content">
          <div className="hero-tag-wrap">
            <span className="hero-marker-tag">#YOURHANDSOMESTARTSHERE</span>
          </div>
          
          <h1 className="hero-title">
            HARMONIS<br />
            <span className="stroke-text">BARBERSHOP</span>
          </h1>

          <p className="hero-description">
            Bukan sekadar potong rambut biasa. Kami menyajikan kualitas grooming jalanan premium, berkelas, presisi tinggi, dan bersertifikat BNSP.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="street-btn-primary skew-left" onClick={handleScrollToBooking}>
              BOOKING SEKARANG <Calendar size={18} style={{ marginLeft: '10px' }} />
            </a>
          </div>

          {/* Warning tape/tilted sticker elements in the style of "WHO THIS CLASS IS FOR" */}
          <div className="hero-stickers-list">
            <div className="sticker-strip skew-left">
              <span>CONFIDENT MASTERY OF ALL STREET CUTS & FADES</span>
            </div>
            <div className="sticker-strip skew-right">
              <span>CERTIFIED BY BNSP INDONESIA & INDUSTRY WORKSHOPS</span>
            </div>
            <div className="sticker-strip skew-left">
              <span>PREMIUM SHAVING, HAIR COLORING & PERMING TREATMENT</span>
            </div>
            <div className="sticker-strip skew-right">
              <span>DO YOUR HAIR RIGHTS AND FEEL THE DIFFERENCE</span>
            </div>
          </div>
        </div>

        {/* Right Side Image Block */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <div className="barcode-strip top-barcode"></div>
            <img 
              src={storefrontImg} 
              alt="Harmonis Barbershop Storefront" 
              className="hero-store-img" 
            />
            {/* Stamp/Label Overlay */}
            <div className="hero-stamp-badge">
              <span className="stamp-text-inner">BARBER LOKAL TEGAL</span>
            </div>
            <div className="barcode-strip bottom-barcode"></div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;
