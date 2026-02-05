
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback: React.FC = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState<Record<string, number>>({
    service: 4,
    staff: 4,
    waiting: 3,
    clean: 4
  });

  const categories = [
    { key: 'service', label: 'Overall Service' },
    { key: 'staff', label: 'Staff Behavior' },
    { key: 'waiting', label: 'Waiting Time' },
    { key: 'clean', label: 'Facility Cleanliness' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
      <header className="px-5 pt-12 pb-4 flex items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)}>
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h2 className="text-lg font-black pr-8 flex-1 text-center">Feedback</h2>
      </header>

      <main className="p-5 space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight">Rate your experience</h1>
          <h2 className="text-xl font-bold font-kannada text-slate-500">ಅಪ್ನ ಅನುಭವವನ್ನು ರೇಟ್ ಮಾಡಿ</h2>
        </div>

        <div className="flex gap-8 items-center bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-center">
            <p className="text-5xl font-black tracking-tighter">4.5</p>
            <div className="flex text-accent mt-1">
              {[1,2,3,4].map(i => <span key={i} className="material-icons-round text-sm">star</span>)}
              <span className="material-icons-round text-sm">star_half</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 mt-2">120 reviews</p>
          </div>
          <div className="flex-1 space-y-2">
            {[5,4,3,2,1].map((n, idx) => (
              <div key={n} className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 w-2">{n}</span>
                <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${80 - idx * 15}%` }}></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 w-8 text-right">{80 - idx * 15}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.key} className="space-y-3">
              <h3 className="text-sm font-black text-slate-800 dark:text-white">{cat.label}</h3>
              <div className="flex justify-between items-center px-2">
                {[1,2,3,4,5].map((n) => (
                  <button 
                    key={n}
                    onClick={() => setRatings({...ratings, [cat.key]: n})}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <span className={`material-icons-round text-2xl transition-all ${
                      ratings[cat.key] >= n ? 'text-primary' : 'text-slate-200 dark:text-slate-800'
                    }`}>
                      star
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">{n}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-black text-slate-800 dark:text-white px-1">Comments (Optional)</h3>
          <textarea 
            placeholder="Additional comments or suggestions..."
            className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl p-4 h-32 focus:ring-primary text-sm font-medium"
          />
        </div>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 dark:shadow-none transition-all active:scale-95"
        >
          Submit Feedback
        </button>
      </main>
    </div>
  );
};

export default Feedback;
