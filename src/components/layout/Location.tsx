import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import '../../styles/Location.css';

const Location: React.FC = () => {
  return (
    <section id="kontak" className="location-section section-padding">
      <div className="location-container container">
        
        {/* Section Header */}
        <div className="section-title-container">
          <span className="section-subtitle">HUBUNGI KAMI</span>
          <h2 className="section-title">LOKASI & KONTAK <span>VISIT HARMONIS</span></h2>
        </div>

        <div className="location-grid">
          
          {/* Contact & Hours Info Card */}
          <div className="location-info-card">
            <h3 className="location-card-title">HARMONIS BARBERSHOP</h3>
            <p className="location-card-desc">
              Langsung datang (walk-in) atau booking jadwal online lewat WhatsApp untuk potongan presisi tanpa antre. Kami siap memberikan hasil terbaik untuk penampilan Anda.
            </p>
            
            <div className="info-details-list">
              <div className="info-detail-item">
                <div className="detail-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="detail-text-block">
                  <span className="detail-label">ALAMAT</span>
                  <a 
                    href="https://maps.app.goo.gl/KChSAi3WmXeNmXgi6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="detail-value-link"
                  >
                    Jl. Sawo Barat No.13, Kelurahan Kraton, Kec. Tegal Barat, Kota Tegal
                  </a>
                </div>
              </div>

              <div className="info-detail-item">
                <div className="detail-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="detail-text-block">
                  <span className="detail-label">TELEPON / WHATSAPP</span>
                  <a href="https://wa.me/62816250492" target="_blank" rel="noopener noreferrer" className="detail-value-link">
                    +62 816-250-492
                  </a>
                </div>
              </div>

              <div className="info-detail-item">
                <div className="detail-icon-wrapper">
                  <Clock size={20} />
                </div>
                <div className="detail-text-block">
                  <span className="detail-label">JAM OPERASIONAL</span>
                  <span className="detail-value">
                    Senin - Kamis, Sabtu & Minggu: 08:00 - 21:00 <br />
                    Jumat: 13:00 - 21:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Frame */}
          <div className="location-map-card">
            <div className="map-barcode-decor"></div>
            <iframe 
              title="Harmonis Barbershop Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.125!2d109.1245!3d-6.8687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9df90123456%3A0x7d018610ed9e1bc8!2sJl.%20Sawo%20Barat%20No.13%2C%20Kraton%2C%20Kec.%20Tegal%20Barat%2C%20Kota%20Tegal!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              className="google-map-iframe"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;