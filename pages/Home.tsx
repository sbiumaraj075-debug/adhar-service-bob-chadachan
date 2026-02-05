
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';

interface HomeProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ toggleDarkMode, isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <main className="pb-24">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-1">
            <img 
              alt="Aadhaar Logo" 
              className="object-contain w-full h-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9MRXXBxbZFdPHgApTfCmgfCg1_wfCd_JZP-oQQ-rWdw21jXyEtBbYB0lZ0Z8_oUvVOuuzlcfV65WgkXTqc1kr3LUdkkkjcygRh6U-ZO2H70Fk4QSo79cxFGxA7RlnfGCyKTEj4O8ezMGdnpUD242tJ6J9m8g0lMVmM9hm7RMfS07iLnu_zRRk4aQmnb2a3A6hcUfftUM6fHQi0d_pJrG4PrBUKplmdMbiRYvlQcTvu0KrpDDWirYqJIbEkMXppkqwlnrgOjbi7rqk" 
            />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight text-primary dark:text-blue-400">AADHAAR</h1>
            <p className="text-[10px] text-slate-500 font-medium">Service Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/notifications')} className="text-slate-400 hover:text-primary">
            <span className="material-icons-outlined">notifications</span>
          </button>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full text-xs font-semibold">
            <button className="px-3 py-1 bg-white dark:bg-slate-600 shadow-sm rounded-full text-primary dark:text-white">EN</button>
            <button className="px-3 py-1 text-slate-500 dark:text-slate-400">KN</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img 
          alt="Indian Family" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6NIH68PczJ6xxooQ_UUMweGFgecb3PNqueYDbaWuyOGr2uEkvyfl4ScbqSqmOlvcTrUTTgS1y_5WCbLfevjYuW8ZTS8oecmSOoyZClJKwqESVCZkuhmKkAP0h_6JLLbjQFdmCh0wa2rNZHf18EXOv3DaQnTS8_x2Z5FInsyDzXir6HS9ZH-doggsa2VzmNoVqNdLbVBvZezd21HaxKqZwwUZdd8ToZooEVcAWfq7GgR5vT6qcCxGySgfL_E3IrX5hINMSZAM6We2C" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex flex-col justify-center px-6">
          <h2 className="text-white text-2xl font-bold leading-snug">
            ಸಂಪೂರ್ಣ ಆಧಾರ್ <br />ನವೀಕರಣ ಶಿಬಿರ
          </h2>
          <p className="text-blue-100 text-sm mt-2 max-w-[200px]">
            Complete Aadhaar Update & Enrollment Services
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mx-4 -mt-6 relative z-10 bg-secondary text-white p-3 rounded-xl shadow-lg flex items-center gap-3">
        <span className="material-icons-outlined text-white">info</span>
        <p className="text-[11px] font-medium leading-tight">
          ಸೂಚನೆ: ಅಪ್‌ಡೇಟ್ ಮಾಡಲು ಅಗತ್ಯ ಅಸಲಿ ದಾಖಲೆಗಳನ್ನು (Original Documents) ಜೊತೆಗೆ ತನ್ನಿ.
        </p>
      </div>

      {/* Services Grid */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Our Services <span className="font-kannada text-slate-500 text-sm font-normal ml-1">ನಮ್ಮ ಸೇವೆಗಳು</span></h3>
          <span className="material-icons-outlined text-primary">arrow_forward</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate('/book')}
              className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3 transition-transform active:scale-95 cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                service.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' :
                service.color === 'green' ? 'bg-green-50 dark:bg-green-900/30 text-green-600' :
                service.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600' :
                'bg-purple-50 dark:bg-purple-900/30 text-purple-600'
              }`}>
                <span className="material-icons-outlined">{service.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">{service.title}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-kannada leading-tight">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 mt-8">
        <button 
          onClick={() => navigate('/book')}
          className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <span className="material-icons-outlined">calendar_today</span>
          Book Appointment
        </button>
      </div>

      {/* Quick Actions / More */}
      <div className="mt-8 px-4">
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => navigate('/locator')} className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl flex items-center gap-3">
            <span className="material-icons-outlined text-primary">location_on</span>
            <span className="text-xs font-bold">Find Center</span>
          </button>
          <button onClick={() => navigate('/help')} className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl flex items-center gap-3">
            <span className="material-icons-outlined text-primary">help</span>
            <span className="text-xs font-bold">Help & FAQ</span>
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 mx-4 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <h5 className="font-bold text-sm mb-4">Contact & Location</h5>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="material-icons-outlined text-primary text-xl">location_on</span>
            <div>
              <p className="text-xs font-semibold">Bank of Baroda Service Center</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Near Bus Stand, Chadchan</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-icons-outlined text-primary text-xl">schedule</span>
            <div>
              <p className="text-xs font-semibold">Timing: 10:00 AM - 05:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-icons-outlined text-primary text-xl">call</span>
            <div>
              <p className="text-xs font-semibold text-primary dark:text-blue-400 underline">+91 7353696119</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle Float */}
      <button 
        onClick={toggleDarkMode}
        className="fixed bottom-24 right-4 w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-600 transition-all active:scale-90 z-40"
      >
        <span className="material-icons-outlined text-slate-700 dark:text-white">
          {isDarkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </main>
  );
};

export default Home;
