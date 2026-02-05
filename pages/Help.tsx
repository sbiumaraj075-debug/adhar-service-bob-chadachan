
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Help: React.FC = () => {
  const navigate = useNavigate();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'Appointment Booking', a: 'How do I book an appointment? What documents do I need for booking? Can I reschedule my appointment?' },
    { q: 'Document Requirements', a: 'List of documents required for Proof of Identity (PoI), Proof of Address (PoA), and Date of Birth (DoB).' },
    { q: 'Correction/Update Process', a: 'Step-by-step guide on how to update your biometric or demographic information.' },
    { q: 'Fees & Charges', a: 'Information about official charges for enrollment and update services at authorized centers.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
      <header className="px-5 pt-12 pb-4 flex items-center gap-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)}>
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h2 className="text-lg font-black pr-10 flex-1 text-center">Help & FAQ</h2>
      </header>

      <main className="p-4 space-y-6">
        <div className="relative">
          <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm transition-all outline-none" 
            placeholder="Search for topics..." 
          />
        </div>

        <section className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Popular topics</h3>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all ${openIdx === idx ? 'ring-1 ring-primary/20' : ''}`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 font-bold text-left text-sm"
                >
                  {faq.q}
                  <span className={`material-icons-round transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openIdx === idx && (
                  <div className="px-4 pb-4 text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Contact Support</h3>
          <div className="flex gap-3">
            <button className="flex-1 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              <span className="material-icons-round text-primary text-xl">call</span>
              Call
            </button>
            <button className="flex-1 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              <span className="material-icons-round text-primary text-xl">email</span>
              Email
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Help;
