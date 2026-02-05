
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Locator: React.FC = () => {
  const navigate = useNavigate();

  const centers = [
    { name: 'Aadhar Center - Central', status: 'Open · ಅೆರೆದಿದ್ದಾನೆ', dist: '1.2 km', addr: '123 Main Street, Bangalore' },
    { name: 'Aadhar Center - MG Road', status: 'Closed · ಮುಚ್ಚಿದ್ದಾನೆ', dist: '2.5 km', addr: '456 MG Road, Bangalore' },
    { name: 'Aadhar Center - Brigade', status: 'Open · ಅೆರೆದಿದ್ದಾನೆ', dist: '3.8 km', addr: '789 Brigade Road, Bangalore' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
      <header className="px-5 pt-12 pb-4 flex items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <button onClick={() => navigate(-1)}>
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h2 className="text-lg font-black pr-8 flex-1 text-center">Service Center</h2>
      </header>

      <main className="space-y-6">
        <div className="p-4">
          <div 
            className="w-full aspect-video bg-slate-200 rounded-3xl overflow-hidden relative shadow-sm border border-slate-200 dark:border-slate-800"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw8ZRJoua5GImCvNijSW2rGJcBMqq9hyRlFJV9NKr1I2QEMABDbb18KU8bNo9GD1DH6X_s66QyHYEjOQoM5DzolYbEQahapRU5MRcIt7znB8a3KuIaO83InNVtqBZN6iC6TLpq-KXaRk9qXHDBaEPbKeZ6baWMfEA29lNN0fexzBdE3XZI_Vl8lA9VT3sskukENz-RwhAu9V2Lbqfgetbm0H6egv8rflrW8poR2w-J-Ej81JQqD1fvVGFwF3YXMmlVhRfz96p7vYk0")', backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
            {/* Fake Map Markers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="material-icons-round text-primary text-4xl">location_on</span>
            </div>
          </div>
        </div>

        <div className="px-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black">Service Centers</h3>
            <button className="text-primary text-sm font-bold">See Map</button>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <button className="whitespace-nowrap px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md">Nearest</button>
            <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold">Open Now</button>
            <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold">Premium Services</button>
          </div>

          <div className="space-y-4">
            {centers.map((c, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex justify-between items-center group active:scale-[0.98] transition-all">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white">{c.name}</h4>
                  <p className={`text-[10px] font-bold ${c.status.includes('Open') ? 'text-green-600' : 'text-secondary'}`}>{c.status}</p>
                  <p className="text-[10px] font-medium text-slate-500">{c.dist} · {c.addr}</p>
                </div>
                <button className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-[10px] font-bold text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-all">
                  Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Locator;
