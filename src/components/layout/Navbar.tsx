import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import '../../styles/Navbar.css';
import logoHarmonis from '../../assets/logoharmonis.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top barcode line for streetwise look */}
      <div className="navbar-top-barcode"></div>

      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo-link" onClick={(e) => handleLinkClick(e, 'hero')}>
          <img src={logoHarmonis} alt="Harmonis Barbershop Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>BERANDA</a></li>
          <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>LAYANAN</a></li>
          <li><a href="#barber" onClick={(e) => handleLinkClick(e, 'barber')}>BARBER</a></li>
          <li><a href="#galeri" onClick={(e) => handleLinkClick(e, 'galeri')}>GALERI</a></li>
          <li><a href="#kontak" onClick={(e) => handleLinkClick(e, 'kontak')}>LOKASI</a></li>
        </ul>

        <div className="navbar-actions">
          <a href="#booking" className="btn-agendar" onClick={(e) => handleLinkClick(e, 'booking')}>
            BOOKING <Calendar size={15} style={{ marginLeft: '8px' }} />
          </a>
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-mobile-menu">
          <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>BERANDA</a></li>
          <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>LAYANAN</a></li>
          <li><a href="#barber" onClick={(e) => handleLinkClick(e, 'barber')}>BARBER</a></li>
          <li><a href="#galeri" onClick={(e) => handleLinkClick(e, 'galeri')}>GALERI</a></li>
          <li><a href="#kontak" onClick={(e) => handleLinkClick(e, 'kontak')}>LOKASI</a></li>
          <li className="mobile-action-item">
            <a href="#booking" className="btn-agendar-mobile" onClick={(e) => handleLinkClick(e, 'booking')}>
              BOOKING SEKARANG
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;