import React from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import '../../styles/Footer.css';
import logoHarmonisFooter from '../../assets/logoharmonis.png';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <footer className="footer">
      {/* Footer top barcode accent line */}
      <div className="footer-top-barcode"></div>

      <div className="footer-container container">
        
        {/* Info Column */}
        <div className="footer-info">
          <a href="#hero" className="footer-logo-link" onClick={(e) => handleLinkClick(e, 'hero')}>
            <img src={logoHarmonisFooter} alt="Harmonis Barbershop Logo" className="footer-logo-img" />
          </a>
          <p className="footer-desc">
            Lebih dari sekadar potongan rambut, ini adalah tentang rasa percaya diri dan karakter. Dapatkan grooming terbaik bersama profesional barbers.
          </p>
          
          {/* Social Media Links */}
          <div className="footer-socials">
            {/* Instagram Barbershop */}
            <a 
              href="https://www.instagram.com/harmonisbarbershoptegal?igsh=MWdpMTduY3F3ejFlOA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="Instagram Harmonis Barbershop"
              title="Instagram Harmonis Barbershop"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>

            {/* Instagram Barber School */}
            <a 
              href="https://www.instagram.com/harmonisbarberschool_tegal?igsh=aG10eGl0YnJzaGI4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="Instagram Harmonis BarberSchool"
              title="Instagram Harmonis BarberSchool"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/184diTHaBJ/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="Facebook"
              title="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/6285225756709" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <MessageSquare size={18} />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div className="footer-nav">
          <h3 className="footer-title">NAVIGASI</h3>
          <ul className="footer-links">
            <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>BERANDA</a></li>
            <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>LAYANAN</a></li>
            <li><a href="#barber" onClick={(e) => handleLinkClick(e, 'barber')}>BARBER TEAM</a></li>
            <li><a href="#galeri" onClick={(e) => handleLinkClick(e, 'galeri')}>GALERI CUKUR</a></li>
            <li><a href="#kontak" onClick={(e) => handleLinkClick(e, 'kontak')}>LOKASI</a></li>
          </ul>
        </div>

        {/* Services List Column */}
        <div className="footer-services">
          <h3 className="footer-title">LAYANAN UTAMA</h3>
          <ul className="footer-links">
            <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>PAKET CUKUR A - D</a></li>
            <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>PAKET PREMIUM SERVICE</a></li>
            <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>HAIR PERMING / CURLY</a></li>
            <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>CREAMBATH TREATMENT</a></li>
            <li><a href="#layanan" onClick={(e) => handleLinkClick(e, 'layanan')}>COLORING & SHAVING</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-contact">
          <h3 className="footer-title">KONTAK KAMI</h3>
          <ul className="contact-info">
            <li>
              <Phone size={15} className="contact-icon" />
              <span>+62 816-250-492</span>
            </li>
            <li>
              <Mail size={15} className="contact-icon" />
              <span>harmonisbarbershop@gmail.com</span>
            </li>
            <li>
              <MapPin size={15} className="contact-icon" />
              <a 
                href="https://maps.app.goo.gl/KChSAi3WmXeNmXgi6" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Jl. Sawo Barat No.13, Kelurahan Kraton, Kec. Tegal Barat, Kota Tegal
              </a>
            </li>
          </ul>
        </div>

        {/* Operational hours Column */}
        <div className="footer-hours">
          <h3 className="footer-title">JAM OPERASIONAL</h3>
          <ul className="hours-list">
            <li>
              <span className="day">SENIN - KAMIS, SABTU & MINGGU</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">JUMAT</span>
              <span className="time">13:00 - 21:00</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Barcode bottom border line */}
      <div className="footer-bottom-barcode"></div>

      <div className="footer-bottom container">
        <p className="copyright">&copy; {new Date().getFullYear()} Harmonis Barbershop. Semua Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;