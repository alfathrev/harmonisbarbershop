import React from 'react';
import '../../styles/Barbers.css';

import imgAllan from '../../assets/barber_allan.jpg';
import imgTomi from '../../assets/barber_tomi.jpg'; 
import imgAhmad from '../../assets/barber_ahmad.jpg'; 

interface BarberMember {
  name: string;
  photo: string;
  certs: string[];
}

const barbersList: BarberMember[] = [
  {
    name: 'Allan',
    photo: imgAllan,
    certs: [
      'Certified Barber BNSP',
      'Certified Harmonis Barberschool',
      'Certified Workshop Barber Culture Pemalang Vol.2 2024',
      'Certified Workshop Capster Talent Day Purwokerto 2025',
      'Certified Workshop Yogya Tegal Barberfest 2025',
      'Certified Gatsby Workshop Plaza Hotel Tegal 2025',
      'Certified Workshop Pekalongan Barberfest 2026',
      'Trainer Harmonis Barberschool'
    ]
  },
  {
    name: 'Tomi',
    photo: imgTomi,
    certs: [
      'Certified Harmonis Barberschool',
      'Certified Workshop Pekalongan Barberfest 2026',
      'Experienced at Pangkas Rambut Jatimas'
    ]
  },
  {
    name: 'Ahmad',
    photo: imgAhmad,
    certs: [
      'Certified Harmonis Barberschool',
      'Experienced at Mondari Barbershop'
    ]
  }
];

const Barbers: React.FC = () => {
  return (
    <section id="barber" className="barbers-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-container">
          <span className="section-subtitle">THE PROFESSIONALS</span>
          <h2 className="section-title">
            WHAT YOU'LL GET AT THE PRO <span className="arrows-red">&lt;&lt; &gt;&gt;</span>
          </h2>
        </div>

        {/* Barbers Grid */}
        <div className="barbers-grid">
          {barbersList.map((barber, index) => (
            <div key={index} className="barber-card-container">
              
              {/* Card Poster Gambar Murni */}
              <div className="barber-poster-wrapper">
                <img 
                  src={barber.photo} 
                  alt={`Barber ${barber.name}`} 
                  className="barber-poster-img"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    userSelect: 'none',
                    pointerEvents: 'none',
                    WebkitUserDrag: 'none'
                  } as React.CSSProperties}
                />
              </div>

              {/* Certifications & Experience List */}
              <div className="barber-certs-board">
                <div className="certs-header">
                  <span className="certs-header-tag">CERTIFICATE & EXPERIENCE</span>
                </div>
                <ul className="certs-list">
                  {barber.certs.map((cert, cIdx) => (
                    <li key={cIdx} className="cert-item">
                      <span className="cert-bullet">&bull;</span>
                      <span className="cert-text">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Barbers;