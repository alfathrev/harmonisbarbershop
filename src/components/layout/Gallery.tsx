import React from 'react';
import '../../styles/Gallery.css';

// Import Gallery Images
import imgFade from '../../assets/Curly_Perm_x_Lowfade.jpg';
import imgUndercut from '../../assets/Longtrim_Wolfcut.jpg';
import imgPompadour from '../../assets/Lowfade_x_Comma.jpg';
import imgBeard from '../../assets/Burstfade.jpg';
import imgBuzzcut from '../../assets/Lowfade_x_Middle_Part.jpg';
import imgTextured from '../../assets/Sidepart_x_Middle_Fade.jpg';

interface GalleryItem {
  id: string;
  image: string;
  styleName: string;
  barberName: string;
}

// Updated barber names to match current staff
const galleryItems: GalleryItem[] = [
  { id: '1', image: imgFade, styleName: 'Curly Perm x Lowfade', barberName: 'Allan' },
  { id: '2', image: imgUndercut, styleName: 'Longtrim Wolfcut', barberName: 'Tomi' },
  { id: '3', image: imgPompadour, styleName: 'Lowfade x Comma', barberName: 'Ahmad' },
  { id: '4', image: imgBeard, styleName: 'Burstfade with Design', barberName: 'Allan' },
  { id: '5', image: imgBuzzcut, styleName: 'Lowfade x Middle Part', barberName: 'Tomi' },
  { id: '6', image: imgTextured, styleName: 'Sidepart x Middle Fade', barberName: 'Ahmad' }
];

const Gallery: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking');
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
    <section id="galeri" className="gallery-section section-padding">
      <div className="gallery-container container">
        
        {/* Section Header */}
        <div className="section-title-container">
          <span className="section-subtitle">INSPIRASI GAYA RAMBUT</span>
          <h2 className="section-title">GALERI HASIL CUKUR <span>HAIRCUT DISPLAY</span></h2>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item-card">
              <div className="gallery-img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.styleName} 
                  className="gallery-image"
                  loading="lazy" 
                />
                
                {/* Barcode details inside overlay */}
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <span className="gallery-barber-tag">CUT BY {item.barberName}</span>
                    <h3 className="gallery-style-title">{item.styleName}</h3>
                    <a href="#booking" className="gallery-booking-link" onClick={handleScrollToBooking}>
                      BOOKING GAYA INI &rarr;
                    </a>
                  </div>
                </div>

              </div>
              
              {/* Polaroid-style photo text block underneath */}
              <div className="gallery-polaroid-label">
                <span className="style-label-marker">{item.styleName}</span>
                <span className="barber-label-marker">@{item.barberName}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
