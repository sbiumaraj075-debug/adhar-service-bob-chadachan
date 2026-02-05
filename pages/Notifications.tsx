
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_NOTIFICATIONS } from '../constants';

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
      <header className="px-5 pt-12 pb-4 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)}>
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h2 className="text-lg font-black pr-8">Notifications</h2>
        <button className="text-primary dark:text-blue-400 font-bold text-sm">Mark all read</button>
      </header>

      <main className="p-4 space-y-8">
        <section className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">New</h3>
          <div className="space-y-3">
            {MOCK_NOTIFICATIONS.filter(n => n.isNew).map(n => (
              <NotificationItem key={n.id} n={n} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">Earlier</h3>
          <div className="space-y-3">
            {MOCK_NOTIFICATIONS.filter(n => !n.isNew).map(n => (
              <NotificationItem key={n.id} n={n} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const NotificationItem: React.FC<{ n: any }> = ({ n }) => (
  <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
      <span className="material-icons-round text-slate-600 dark:text-slate-300">
        {n.type === 'Appointment' ? 'schedule' : n.type === 'Document Verification' ? 'verified' : 'info'}
      </span>
    </div>
    <div className="flex-1">
      <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tight">{n.type}</p>
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">{n.message}</p>
    </div>
    <p className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{n.time}</p>
  </div>
);

export default Notifications;
