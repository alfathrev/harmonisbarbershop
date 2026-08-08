import React from 'react';
import '../../styles/Pricelist.css';

interface PackageItem {
  name: string;
  price: string;
  details: string;
}

interface TreatmentItem {
  name: string;
  price: string;
}

const mainPackages: PackageItem[] = [
  {
    name: 'Paket A',
    price: '35K',
    details: 'Haircut + Hairtonic + Pomade'
  },
  {
    name: 'Paket B',
    price: '45K',
    details: 'Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat'
  },
  {
    name: 'Paket C',
    price: '55K',
    details: 'Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat + Handuk Hangat'
  },
  {
    name: 'Paket D',
    price: '65K',
    details: 'Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat + Handuk Hangat + Masker Wajah'
  }
];

const treatments: TreatmentItem[] = [
  { name: 'Creambath', price: '65K' },
  { name: 'Bleaching Hairlight', price: 'MULAI 110K' },
  { name: 'Colouring / Semir Warna', price: 'MULAI 200K' },
  { name: 'Semir Hitam / Dark Brown', price: 'MULAI 75K' },
  { name: 'Shaving', price: '20K' },
  { name: 'Hair Tattoo', price: 'MULAI 15K' },
  { name: 'Hairwash / Cuci Rambut', price: '15K' }
];

const Pricelist: React.FC = () => {
  return (
    <section id="layanan" className="pricelist-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-container">
          <span className="section-subtitle">PILIHAN LAYANAN KAMI</span>
          <h2 className="section-title">PRICE LIST <span>HARMONIS</span></h2>
        </div>

        {/* Pricelist Board Container (Styled like the printed sign) */}
        <div className="pricelist-board">
          {/* Bolts for hanger aesthetic */}
          <div className="board-bolt top-left"></div>
          <div className="board-bolt top-right"></div>
          <div className="board-bolt bottom-left"></div>
          <div className="board-bolt bottom-right"></div>
          
          <div className="board-header">
            <h3 className="board-title">PRICELIST</h3>
          </div>

          <div className="board-grid">
            
            {/* Main Packages (Paket A - D) */}
            <div className="packages-column">
              <div className="packages-list">
                {mainPackages.map((pkg, idx) => (
                  <div key={idx} className="package-item">
                    <div className="package-main">
                      <span className="package-name">{pkg.name}</span>
                      <span className="package-dots"></span>
                      <span className="package-price">{pkg.price}</span>
                    </div>
                    <p className="package-details">{pkg.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Pricelist */}
            <div className="treatments-column">
              <h4 className="column-subtitle">PRICELIST TREATMENT</h4>
              <div className="treatments-list">
                {treatments.map((tr, idx) => (
                  <div key={idx} className="treatment-item">
                    <span className="treatment-name">{tr.name}</span>
                    <span className="treatment-dots"></span>
                    <span className="treatment-price">{tr.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Special Promo Block */}
          <div className="board-footer-grid">
            
            {/* Special Price Card */}
            <div className="special-price-card">
              <div className="special-badge">SPECIAL PRICE</div>
              <h5 className="special-title">Paket Premium / Full Service</h5>
              <div className="special-price-value">125K</div>
              <p className="special-desc">
                Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat + Handuk Hangat + Masker Wajah + Creambath
              </p>
            </div>

            {/* New Treatment Card */}
            <div className="new-treatment-card">
              <div className="new-badge">NEW TREATMENT</div>
              <h5 className="new-title">Hair Perming / Curly</h5>
              <div className="new-price-value">150K</div>
              <p className="new-desc">
                Dapatkan gaya rambut keriting modern / perm bertekstur dengan obat premium dan hasil tahan lama.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricelist;
