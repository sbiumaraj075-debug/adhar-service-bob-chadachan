
import React from 'react';
import { MOCK_APPOINTMENTS } from '../constants';
import { AppointmentStatus } from '../types';

const Appointments: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
      <header className="px-5 pt-12 pb-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">ನೇಮಕಾತಿಗಳು</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Appointments Manager</p>
          </div>
          <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent">
            <span className="material-icons-round">calendar_today</span>
          </button>
        </div>
        <div className="relative group">
          <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm transition-all outline-none" 
            placeholder="ಫೋನ್ ಸಂಖ್ಯೆಯ ಮೂಲಕ ಹುಡುಕಿ (Search by phone...)" 
            type="text"
          />
        </div>
      </header>

      {/* Stats Cards */}
      <div className="flex gap-3 px-5 py-4 overflow-x-auto no-scrollbar scrollbar-hide">
        <div className="flex-shrink-0 bg-primary text-white p-4 rounded-3xl w-32 shadow-lg shadow-primary/20">
          <p className="text-[10px] opacity-80 uppercase font-bold tracking-wider">Total</p>
          <p className="text-2xl font-black">24</p>
        </div>
        <div className="flex-shrink-0 bg-white dark:bg-slate-900 p-4 rounded-3xl w-32 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Pending</p>
          <p className="text-2xl font-black text-secondary">08</p>
        </div>
        <div className="flex-shrink-0 bg-white dark:bg-slate-900 p-4 rounded-3xl w-32 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Done</p>
          <p className="text-2xl font-black text-green-600">16</p>
        </div>
      </div>

      <main className="px-5 space-y-4">
        <div className="flex items-center justify-between py-2">
          <h2 className="font-bold text-lg">ಇಂದಿನ ಪಟ್ಟಿ (Today's List)</h2>
          <button className="text-primary text-sm font-bold flex items-center bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full">
            Filter <span className="material-icons-round text-sm ml-1">filter_list</span>
          </button>
        </div>

        <div className="space-y-4">
          {MOCK_APPOINTMENTS.map((app) => (
            <div 
              key={app.id}
              className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary dark:text-blue-400">
                    <span className="material-icons-round">person</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{app.customerName}</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{app.phone}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${
                  app.status === AppointmentStatus.PENDING 
                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700' 
                  : 'bg-green-100 dark:bg-green-900/30 text-green-700'
                }`}>
                  {app.status}
                </span>
              </div>

              <div className="space-y-2 mb-4 pl-1">
                <div className="flex items-center text-xs font-medium text-slate-600 dark:text-slate-400">
                  <span className="material-icons-round text-sm mr-2 opacity-50">edit_note</span>
                  <span>Aadhaar Update Request</span>
                </div>
                <div className="flex items-center text-xs font-medium text-slate-600 dark:text-slate-400">
                  <span className="material-icons-round text-sm mr-2 opacity-50">schedule</span>
                  <span>{app.time}</span>
                </div>
                <div className="flex items-center text-xs font-medium text-slate-600 dark:text-slate-400">
                  <span className="material-icons-round text-sm mr-2 opacity-50">location_on</span>
                  <span>{app.venue}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-3 bg-green-600 text-white rounded-2xl text-xs font-bold hover:bg-green-700 transition-colors">Complete</button>
                <button className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl text-xs font-bold">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <button className="fixed bottom-24 right-5 bg-secondary text-white p-4 rounded-full shadow-2xl flex items-center space-x-2 z-40 active:scale-95 transition-transform">
        <span className="material-icons-round">analytics</span>
        <span className="font-bold pr-2">ವರದಿ (Report)</span>
      </button>
    </div>
  );
};

export default Appointments;
