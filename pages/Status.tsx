
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Status: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    { title: 'Appointment Booked', desc: '10:00 AM, 15th May 2024', status: 'completed' },
    { title: 'Documents Verified', desc: '11:30 AM, 15th May 2024', status: 'completed' },
    { title: 'Center Visit Completed', desc: '02:00 PM, 15th May 2024', status: 'completed' },
    { title: 'Aadhar Generated/Updated', desc: 'Pending', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-[#111a22] text-white pb-32">
      <header className="px-4 pt-12 pb-4 flex items-center gap-4 border-b border-white/10">
        <button onClick={() => navigate(-1)} className="p-2">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold flex-1 text-center pr-10">Track Status</h2>
      </header>

      <main className="p-4 space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-400">
            Appointment ID or Aadhar Request Number
          </label>
          <div className="flex gap-2">
            <input 
              placeholder="Enter ID" 
              className="flex-1 bg-[#233648] border-none rounded-xl h-14 px-4 text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500"
              defaultValue="AP12345678"
            />
            <button className="bg-primary px-6 rounded-xl font-bold">Track</button>
          </div>
        </div>

        <div className="bg-[#1a2530] p-6 rounded-3xl border border-white/5 space-y-8">
          <h3 className="text-lg font-bold">Application Journey</h3>
          
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    step.status === 'completed' ? 'bg-green-500' : 'bg-[#233648] border-2 border-slate-700'
                  }`}>
                    {step.status === 'completed' ? (
                      <span className="material-icons-round text-white text-sm">check</span>
                    ) : (
                      <span className="material-icons-round text-slate-500 text-sm">schedule</span>
                    )}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className={`w-0.5 grow -my-1 ${step.status === 'completed' ? 'bg-green-500' : 'bg-slate-700'}`}></div>
                  )}
                </div>
                <div className="pb-8">
                  <p className={`font-bold ${step.status === 'completed' ? 'text-white' : 'text-slate-400'}`}>{step.title}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-[#233648] py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2">
            <span className="material-icons-round">file_download</span>
            Download Receipt ( ಅನುಮತಿ ಪತ್ರ )
          </button>
          <button onClick={() => navigate('/help')} className="w-full border border-white/10 py-4 rounded-2xl font-bold text-sm text-slate-400">
            Need Help?
          </button>
        </div>
      </main>
    </div>
  );
};

export default Status;
