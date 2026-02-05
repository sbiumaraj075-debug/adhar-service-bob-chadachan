
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('address');
  const [selectedDate, setSelectedDate] = useState('12');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const dates = [
    { day: 'MON', date: '12', month: 'OCT' },
    { day: 'TUE', date: '13', month: 'OCT' },
    { day: 'WED', date: '14', month: 'OCT' },
    { day: 'THU', date: '15', month: 'OCT' },
    { day: 'FRI', date: '16', month: 'OCT' },
  ];

  const times = ['10:00 AM', '11:00 AM', '12:00 PM', '02:30 PM', '03:30 PM', '04:30 PM'];

  const handleConfirm = () => {
    // Navigate to confirmation or bookings
    navigate('/bookings');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black pb-32">
      <header className="px-5 pt-12 pb-4 bg-white/80 dark:bg-black/80 sticky top-0 backdrop-blur-md z-40">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary dark:text-blue-400 mb-2"
        >
          <span className="material-icons-round">arrow_back_ios</span>
          <span className="font-medium">Back</span>
        </button>
        <h1 className="text-3xl font-bold tracking-tight">Book Appointment</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">ಆಧಾರ್ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ</p>
      </header>

      <main className="px-4 space-y-6 pt-4">
        {/* Service Selection */}
        <section className="space-y-2">
          <label className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Select Service / ಸೇವೆಯನ್ನು ಆರಿಸಿ
          </label>
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={() => setSelectedService('address')}
              className={`flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border-2 transition-all ${
                selectedService === 'address' ? 'border-primary dark:border-blue-500 shadow-md' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedService === 'address' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-slate-100 dark:bg-slate-800'}`}>
                  <span className={`material-icons-round ${selectedService === 'address' ? 'text-primary dark:text-blue-400' : 'text-slate-500'}`}>home</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Address Change</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">ವಿಳಾಸ ಬದಲಾವಣೆ</p>
                </div>
              </div>
              {selectedService === 'address' && <span className="material-icons-round text-primary dark:text-blue-400">check_circle</span>}
            </button>

            <button 
              onClick={() => setSelectedService('biometric')}
              className={`flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border-2 transition-all ${
                selectedService === 'biometric' ? 'border-primary dark:border-blue-500 shadow-md' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedService === 'biometric' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-slate-100 dark:bg-slate-800'}`}>
                  <span className={`material-icons-round ${selectedService === 'biometric' ? 'text-primary dark:text-blue-400' : 'text-slate-500'}`}>fingerprint</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Biometric Update</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">ಬಯೋಮೆಟ್ರಿಕ್ ಅಪ್‌ಡೇಟ್</p>
                </div>
              </div>
              {selectedService === 'biometric' && <span className="material-icons-round text-primary dark:text-blue-400">check_circle</span>}
            </button>
          </div>
        </section>

        {/* Personal Details */}
        <section className="space-y-4">
          <label className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Personal Details / ವೈಯಕ್ತಿಕ ವಿವರಗಳು
          </label>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 shadow-sm">
            <div className="p-4 flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 mb-1 uppercase">Full Name / ಹೆಸರು</span>
              <input 
                className="bg-transparent border-none p-0 text-lg focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-slate-600 w-full" 
                placeholder="Enter Full Name" 
                type="text"
              />
            </div>
            <div className="p-4 flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 mb-1 uppercase">Phone Number / ಮೊಬೈಲ್ ಸಂಖ್ಯೆ</span>
              <input 
                className="bg-transparent border-none p-0 text-lg focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-slate-600 w-full" 
                placeholder="+91 00000 00000" 
                type="tel"
              />
            </div>
          </div>
        </section>

        {/* Date & Time */}
        <section className="space-y-4">
          <label className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Date & Time / ದಿನಾಂಕ ಮತ್ತು ಸಮಯ
          </label>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((d) => (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className={`flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center transition-all ${
                  selectedDate === d.date 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span className={`text-[10px] ${selectedDate === d.date ? 'opacity-80' : 'text-slate-500'}`}>{d.day}</span>
                <span className="text-xl font-bold leading-tight">{d.date}</span>
                <span className={`text-[10px] font-bold ${selectedDate === d.date ? 'opacity-80' : 'text-slate-400'}`}>{d.month}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-3 px-1 rounded-xl text-xs font-bold transition-all border ${
                  selectedTime === t
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Reminder */}
        <section className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4 rounded-2xl flex gap-3">
          <span className="material-icons-round text-red-600 shrink-0">info</span>
          <div className="space-y-1">
            <p className="text-red-800 dark:text-red-200 font-bold text-sm leading-tight">
              Required: Bring Original Documents
            </p>
            <p className="text-red-700 dark:text-red-300 text-xs leading-relaxed">
              ಸೂಚನೆ: ಅಪ್‌ಡೇಟ್ ಮಾಡಲು ಅಗತ್ಯ ಅಸಲಿ ದಾಖಲೆಗಳನ್ನು (Original Documents) ಜೊತೆಗೆ ತನ್ನಿ.
            </p>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Confirm */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-12 z-50">
        <button 
          onClick={handleConfirm}
          className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all flex flex-col items-center leading-none"
        >
          <span>Confirm Appointment</span>
          <span className="text-[10px] font-normal opacity-80 mt-1 uppercase tracking-widest">ದೃಢೀಕರಿಸಿ</span>
        </button>
      </div>
    </div>
  );
};

export default Booking;
