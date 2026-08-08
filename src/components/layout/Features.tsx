import React from 'react';
import { CalendarCheck, Award, Sparkles, CreditCard } from 'lucide-react';
import '../../styles/Features.css';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Features: React.FC = () => {
  const featuresList: FeatureItem[] = [
    {
      icon: <CalendarCheck size={32} className="feature-icon" />,
      title: "Booking Cepat",
      desc: "Pesan jadwal Anda secara online hanya dalam beberapa klik."
    },
    {
      icon: <Award size={32} className="feature-icon" />,
      title: "Barber Profesional",
      desc: "Barber berpengalaman dan tersertifikasi untuk hasil potongan terbaik."
    },
    {
      icon: <Sparkles size={32} className="feature-icon" />,
      title: "Tempat Premium",
      desc: "Suasana nyaman dengan interior eksklusif dan minuman gratis."
    },
    {
      icon: <CreditCard size={32} className="feature-icon" />,
      title: "Kemudahan Pembayaran",
      desc: "Menerima pembayaran via e-wallet, debit, QRIS, dan tunai."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container container">
        {featuresList.map((item, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon-wrapper">
              {item.icon}
            </div>
            <div className="feature-text">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
