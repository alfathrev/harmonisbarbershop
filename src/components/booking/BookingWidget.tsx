import React, { useState } from 'react';
import { Clock, Info, ShieldCheck, ChevronLeft, ChevronRight, Check, User, Scissors } from 'lucide-react';
import '../../styles/Booking.css';

import imgAllan from '../../assets/barber_allan.jpg';
import imgTomi from '../../assets/barber_tomi.jpg';
import imgAhmad from '../../assets/barber_ahmad.jpg';

interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: 'package' | 'special' | 'treatment';
}

interface Barber {
  id: string;
  name: string;
  rating: number;
  image: string;
}

type PaymentMethod = 'Cash' | 'Transfer' | 'QRIS';

const servicesList: Service[] = [
  { id: '1', name: 'Paket A (Haircut + Tonic + Pomade)', price: 35000, duration: '20 min', category: 'package' },
  { id: '2', name: 'Paket B (Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat)', price: 45000, duration: '30 min', category: 'package' },
  { id: '3', name: 'Paket C (Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat + Handuk Hangat)', price: 55000, duration: '40 min', category: 'package' },
  { id: '4', name: 'Paket D (Haircut + Hairtonic + Pomade + Cuci Rambut + Pijat + Handuk Hangat + Masker Wajah)', price: 65000, duration: '50 min', category: 'package' },
  { id: '5', name: 'Paket Premium / Full Service', price: 125000, duration: '75 min', category: 'special' },
  { id: '13', name: 'Hair Perming / Curly', price: 150000, duration: '90 min', category: 'special' },
  { id: '6', name: 'Creambath', price: 65000, duration: '30 min', category: 'treatment' },
  { id: '7', name: 'Bleaching Hairlight', price: 110000, duration: '60 min', category: 'treatment' },
  { id: '8', name: 'Colouring / Semir Warna', price: 200000, duration: '60 min', category: 'treatment' },
  { id: '9', name: 'Semir Hitam / Dark Brown', price: 75000, duration: '45 min', category: 'treatment' },
  { id: '10', name: 'Shaving', price: 20000, duration: '15 min', category: 'treatment' },
  { id: '11', name: 'Hair Tattoo', price: 15000, duration: '20 min', category: 'treatment' },
  { id: '12', name: 'Hairwash / Cuci Rambut', price: 15000, duration: '15 min', category: 'treatment' }
];

const barbersList: Barber[] = [
  { id: '1', name: 'Allan', rating: 4.9, image: imgAllan },
  { id: '2', name: 'Tomi', rating: 4.8, image: imgTomi },
  { id: '3', name: 'Ahmad', rating: 4.7, image: imgAhmad }
];

const regularTimeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
];

const fridayTimeSlots = [
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
];

const monthNames = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const dayNames = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

const BookingWidget: React.FC = () => {
  const [customerName, setCustomerName] = useState<string>('');
  const [hairStyle, setHairStyle] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Cash');
  const [nameError, setNameError] = useState<boolean>(false);

  // Diubah menjadi null agar awal masuk tidak ada layanan yang terpilih secara otomatis
  const [selectedMainPackage, setSelectedMainPackage] = useState<Service | null>(null);
  
  const [selectedTreatments, setSelectedTreatments] = useState<Service[]>([]);

  // Diubah menjadi null agar pilihan barber kosong di awal
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const isSpecialSelected = selectedMainPackage?.category === 'special';

  // Friday Logic Check
  const isFridaySelected = selectedDate.getDay() === 5;
  const availableTimeSlots = isFridaySelected ? fridayTimeSlots : regularTimeSlots;

  // Diubah menjadi string kosong agar jam slot tidak terpilih di awal
  const [selectedTime, setSelectedTime] = useState<string>('');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day);
    setSelectedDate(clickedDate);

    if (clickedDate.getDay() === 5) {
      if (selectedTime) {
        const selectedHour = parseInt(selectedTime.split(':')[0], 10);
        if (selectedHour < 13) {
          setSelectedTime('13:00');
        }
      }
    }
  };

  const handleSelectMainPackage = (service: Service) => {
    const isSelected = selectedMainPackage?.id === service.id;
    if (isSelected) {
      setSelectedMainPackage(null);
    } else {
      setSelectedMainPackage(service);
      if (service.category === 'special') {
        setSelectedTreatments([]);
      }
    }
  };

  const toggleTreatment = (service: Service) => {
    if (isSpecialSelected) return;

    if (selectedTreatments.some(t => t.id === service.id)) {
      setSelectedTreatments(selectedTreatments.filter(t => t.id !== service.id));
    } else {
      setSelectedTreatments([...selectedTreatments, service]);
    }
  };

  const calculateTotalPrice = () => {
    const mainPrice = selectedMainPackage ? selectedMainPackage.price : 0;
    const treatmentPrice = selectedTreatments.reduce((sum, t) => sum + t.price, 0);
    return mainPrice + treatmentPrice;
  };

  const formatDisplayDate = (date: Date) => {
    const d = date.getDate();
    const m = monthNames[date.getMonth()];
    const y = date.getFullYear();
    return `${d} ${m} ${y}`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleConfirmBooking = () => {
    if (!customerName.trim()) {
      setNameError(true);
      return;
    }
    if (!selectedMainPackage && selectedTreatments.length === 0) {
      alert('Silakan pilih minimal 1 Layanan atau Treatment.');
      return;
    }
    if (!selectedBarber) {
      alert('Silakan pilih salah satu Barber terlebih dahulu.');
      return;
    }
    if (!selectedTime) {
      alert('Silakan pilih jam slot terlebih dahulu.');
      return;
    }
    setNameError(false);

    const totalFormatted = formatPrice(calculateTotalPrice());
    const hairStyleLine = hairStyle.trim() ? `• *Gaya Rambut:* ${hairStyle.trim()}\n` : '';
    
    let serviceBlock = '';
    if (selectedMainPackage && selectedTreatments.length > 0) {
      const treatmentListStr = selectedTreatments.map(t => t.name).join(', ');
      serviceBlock = 
        `• *Layanan:* ${selectedMainPackage.name}\n` +
        `• *Treatment:* ${treatmentListStr}\n`;
    } else if (selectedMainPackage) {
      serviceBlock = `• *Layanan:* ${selectedMainPackage.name}\n`;
    } else {
      const treatmentListStr = selectedTreatments.map(t => t.name).join(', ');
      serviceBlock = `• *Layanan:* ${treatmentListStr}\n`;
    }

    const textMessage = 
      `Halo Harmonis Barbershop! Saya ingin melakukan booking jadwal:\n\n` +
      `• *Nama:* ${customerName.trim()}\n` +
      hairStyleLine +
      serviceBlock +
      `• *Barber:* ${selectedBarber.name}\n` +
      `• *Tanggal:* ${formatDisplayDate(selectedDate)}\n` +
      `• *Waktu:* ${selectedTime}\n` +
      `• *Total Harga:* ${totalFormatted}\n` +
      `• *Metode Pembayaran:* ${paymentMethod}\n\n` +
      `Mohon konfirmasi ketersediaan slot ini. Terima kasih!`;

    const waNumber = '62816250492'; 
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(waUrl, '_blank');
  };

  const renderCalendarCells = () => {
    const cells = [];
    
    for (let i = 0; i < firstDayIndex; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = 
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      const isToday = 
        new Date().getDate() === day &&
        new Date().getMonth() === month &&
        new Date().getFullYear() === year;

      const todayDate = new Date();
      todayDate.setHours(0,0,0,0);
      const cellDate = new Date(year, month, day);
      const isPast = cellDate < todayDate;

      cells.push(
        <button
          key={`day-${day}`}
          type="button"
          className={`calendar-day-btn ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${isPast ? 'past' : ''}`}
          onClick={() => !isPast && handleDateClick(day)}
          disabled={isPast}
        >
          {day}
        </button>
      );
    }

    return cells;
  };

  return (
    <section id="booking" className="booking-section section-padding">
      <div className="booking-container container">
        
        {/* Section Header */}
        <div className="booking-header">
          <div className="booking-title-block">
            <h2 className="booking-section-title">BOOKING JADWAL</h2>
            <div className="booking-divider"></div>
          </div>
          <div className="booking-hours-notice">
            <Clock size={16} className="notice-icon" />
            <span>OPERASIONAL: <strong>08.00 - 21.00</strong> (JUMAT: <strong>13.00 - 21.00</strong>)</span>
          </div>
        </div>

        {/* Steps Indicators */}
        <div className="booking-steps">
          <div className="step-item active">
            <span className="step-num">1</span>
            <div className="step-text"><span className="step-title">LAYANAN</span></div>
          </div>
          <div className="step-line"></div>
          <div className="step-item active">
            <span className="step-num">2</span>
            <div className="step-text"><span className="step-title">BARBER</span></div>
          </div>
          <div className="step-line"></div>
          <div className="step-item active">
            <span className="step-num">3</span>
            <div className="step-text"><span className="step-title">WAKTU</span></div>
          </div>
          <div className="step-line"></div>
          <div className="step-item active">
            <span className="step-num">4</span>
            <div className="step-text"><span className="step-title">REVIEW</span></div>
          </div>
        </div>

        {/* Wizard Panel */}
        <div className="booking-wizard-grid">
          
          {/* Step 1: Services List */}
          <div className="wizard-column">
            <h3 className="column-title">
              <span className="column-title-icon">✂️</span> PILIH LAYANAN
            </h3>
            
            <div className="services-list-container">
              
              {/* Kategori 1: Paket Utama A-D */}
              <div className="service-category-group">
                <span className="category-tag-title">PAKET HAIRCUT</span>
                {servicesList.filter(s => s.category === 'package').map(service => {
                  const isSelected = selectedMainPackage?.id === service.id;
                  return (
                    <button 
                      key={service.id} 
                      type="button"
                      className={`service-card-select ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectMainPackage(service)}
                    >
                      <div className="service-select-info">
                        <span className="service-select-name">{service.name}</span>
                        <span className="service-select-price">{formatPrice(service.price)}</span>
                      </div>
                      <div className="service-select-indicator">
                        <div className={`check-indicator ${isSelected ? 'selected' : ''}`}>
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Kategori 2: Special & New Treatments */}
              <div className="service-category-group" style={{ marginTop: '16px' }}>
                <span className="category-tag-title special-tag">SPECIAL & NEW TREATMENT</span>
                {servicesList.filter(s => s.category === 'special').map(service => {
                  const isSelected = selectedMainPackage?.id === service.id;
                  return (
                    <button 
                      key={service.id} 
                      type="button"
                      className={`service-card-select ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectMainPackage(service)}
                    >
                      <div className="service-select-info">
                        <span className="service-select-name">{service.name}</span>
                        <span className="service-select-price">{formatPrice(service.price)}</span>
                      </div>
                      <div className="service-select-indicator">
                        <div className={`check-indicator ${isSelected ? 'selected' : ''}`}>
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Kategori 3: Pricelist Treatment & Extra */}
              <div className="service-category-group" style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="category-tag-title" style={{ margin: 0 }}>TAMBAHAN TREATMENT</span>
                  {isSpecialSelected && (
                    <span style={{ fontSize: '10px', color: '#ff4d4d', fontWeight: 'bold' }}>
                      (TIDAK TERSEDIA UNTUK SPECIAL TREATMENT)
                    </span>
                  )}
                </div>
                {servicesList.filter(s => s.category === 'treatment').map(service => {
                  const isSelected = selectedTreatments.some(t => t.id === service.id);
                  return (
                    <button 
                      key={service.id} 
                      type="button"
                      disabled={isSpecialSelected}
                      className={`service-card-select ${isSelected ? 'selected' : ''} ${isSpecialSelected ? 'disabled' : ''}`}
                      style={isSpecialSelected ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
                      onClick={() => toggleTreatment(service)}
                    >
                      <div className="service-select-info">
                        <span className="service-select-name">{service.name}</span>
                        <span className="service-select-price">{formatPrice(service.price)}</span>
                      </div>
                      <div className="service-select-indicator">
                        <div className={`check-indicator ${isSelected ? 'selected' : ''}`}>
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            <div className="services-note">
              <Info size={16} className="note-icon" />
              <span>Semua haircut sudah termasuk tonic, pijat kepala, dan styling pomade.</span>
            </div>
          </div>

          {/* Step 2: Barbers List */}
          <div className="wizard-column">
            <h3 className="column-title">
              <span className="column-title-icon">💈</span> PILIH BARBER
            </h3>
            <div className="barbers-list-container">
              {barbersList.map((barber) => {
                const isSelected = selectedBarber?.id === barber.id;
                return (
                  <button
                    key={barber.id}
                    type="button"
                    className={`barber-card-select ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedBarber(barber)}
                  >
                    <div className="barber-avatar-container">
                      <img src={barber.image} alt={barber.name} className="barber-select-img" />
                    </div>
                    <div className="barber-select-info">
                      <span className="barber-select-name">{barber.name}</span>
                      <span className="barber-select-rating">⭐ {barber.rating}</span>
                    </div>
                    <div className="barber-select-indicator">
                      <div className={`check-indicator ${isSelected ? 'selected' : ''}`}>
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Date and Time Picker */}
          <div className="wizard-column">
            <h3 className="column-title">
              <span className="column-title-icon">📅</span> PILIH JADWAL
            </h3>
            
            {/* Calendar */}
            <div className="calendar-widget">
              <div className="calendar-nav">
                <button type="button" onClick={prevMonth} className="cal-nav-btn" aria-label="Bulan sebelumnya">
                  <ChevronLeft size={16} />
                </button>
                <span className="calendar-current-month">
                  {monthNames[month]} {year}
                </span>
                <button type="button" onClick={nextMonth} className="cal-nav-btn" aria-label="Bulan berikutnya">
                  <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="calendar-weekdays">
                {dayNames.map((day) => (
                  <div key={day} className="weekday-label">{day}</div>
                ))}
              </div>
              
              <div className="calendar-days-grid">
                {renderCalendarCells()}
              </div>
            </div>

            {/* Time Picker */}
            <div className="time-picker-widget">
              <h4 className="time-picker-title">
                PILIH JAM SLOT {isFridaySelected && <span style={{ color: '#E32626', fontSize: '11px', marginLeft: '6px' }}>(JUMAT BUKA 13.00)</span>}
              </h4>
              <div className="time-slots-grid">
                {availableTimeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      className={`time-slot-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 4: Booking Summary & Customer Info */}
          <div className="wizard-column summary-column">
            <h3 className="column-title">
              <span className="column-title-icon">🧾</span> REVIEW BOOKING
            </h3>
            
            <div className="summary-card">
              {/* Form Input Nama Pelanggan */}
              <div className="customer-input-group">
                <label 
                  htmlFor="customerName" 
                  className={`input-label ${nameError ? 'error' : ''}`}
                >
                  NAMA PEMESAN <span className="req-star">*</span>
                </label>
                <div className="input-with-icon">
                  <input
                    id="customerName"
                    type="text"
                    placeholder="Masukkan nama Anda..."
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (e.target.value.trim()) setNameError(false);
                    }}
                  />
                  <User size={16} className="input-icon" />
                </div>
                {nameError && (
                  <span className="input-error-msg">
                    Nama harus diisi untuk konfirmasi.
                  </span>
                )}
              </div>

              {/* Form Input Model Gaya Rambut (Opsional) */}
              <div className="customer-input-group">
                <label htmlFor="hairStyle" className="input-label">
                  GAYA RAMBUT <span className="opt-tag">(OPSIONAL)</span>
                </label>
                <div className="input-with-icon">
                  <input
                    id="hairStyle"
                    type="text"
                    placeholder="Mullet, Undercut, Two Block..."
                    value={hairStyle}
                    onChange={(e) => setHairStyle(e.target.value)}
                  />
                  <Scissors size={16} className="input-icon" />
                </div>
              </div>

              {/* Form Input Pilihan Pembayaran */}
              <div className="customer-input-group">
                <label className="input-label">
                  METODE PEMBAYARAN <span className="req-star">*</span>
                </label>
                <div className="payment-options-grid">
                  {(['Cash', 'Transfer', 'QRIS'] as PaymentMethod[]).map((method) => (
                    <button
                      key={method}
                      type="button"
                      className={`payment-option-btn ${paymentMethod === method ? 'selected' : ''}`}
                      onClick={() => setPaymentMethod(method)}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Details UI */}
              <div className="summary-details">
                {/* Opsi A: Tampil Paket Utama / Special Treatment Jika Ada */}
                {selectedMainPackage && (
                  <div className="summary-row">
                    <span className="summary-label">PAKET</span>
                    <div className="summary-value-block">
                      <span className="summary-value text-bold">{selectedMainPackage.name}</span>
                      <span className="summary-subvalue">{formatPrice(selectedMainPackage.price)}</span>
                    </div>
                  </div>
                )}

                {/* Opsi B: Tampil Treatment Jika Tidak Pilih Paket Utama */}
                {!selectedMainPackage && selectedTreatments.length > 0 && (
                  <div className="summary-row">
                    <span className="summary-label">LAYANAN</span>
                    <div className="summary-value-block">
                      {selectedTreatments.map(t => (
                        <div key={t.id} style={{ textAlign: 'right', marginBottom: '2px' }}>
                          <span className="summary-value text-bold" style={{ fontSize: '12px' }}>{t.name}</span>
                          <span className="summary-subvalue" style={{ marginLeft: '6px' }}>{formatPrice(t.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Opsi C: Tampil Treatment Tambahan Jika Paket Utama Biasa Dipilih */}
                {selectedMainPackage && selectedTreatments.length > 0 && (
                  <div className="summary-row" style={{ marginTop: '8px' }}>
                    <span className="summary-label">TREATMENT</span>
                    <div className="summary-value-block">
                      {selectedTreatments.map(t => (
                        <div key={t.id} style={{ textAlign: 'right', marginBottom: '2px' }}>
                          <span className="summary-value text-bold" style={{ fontSize: '12px' }}>{t.name}</span>
                          <span className="summary-subvalue" style={{ marginLeft: '6px' }}>{formatPrice(t.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="summary-row">
                  <span className="summary-label">BARBER</span>
                  <span className="summary-value text-bold">{selectedBarber ? selectedBarber.name : '-'}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">TANGGAL</span>
                  <span className="summary-value text-bold">{formatDisplayDate(selectedDate)}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">JAM</span>
                  <span className="summary-value text-bold">{selectedTime || '-'}</span>
                </div>
                
                <div className="summary-divider-line"></div>
                
                <div className="summary-row total-row">
                  <span className="summary-label total-label">TOTAL</span>
                  <span className="summary-value total-price">{formatPrice(calculateTotalPrice())}</span>
                </div>
              </div>

              <button type="button" className="btn-confirm-booking" onClick={handleConfirmBooking}>
                KIRIM KE WHATSAPP &rarr;
              </button>

              <div className="summary-safety-notice">
                <ShieldCheck size={16} className="safety-icon" />
                <span>Otomatis terhubung ke WhatsApp Harmonis untuk konfirmasi instan.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingWidget;