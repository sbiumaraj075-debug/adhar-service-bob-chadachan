
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
      <header className="px-5 pt-12 pb-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-black tracking-tight text-center">Profile Settings</h1>
      </header>

      <main className="p-5 space-y-8">
        {/* User Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img 
              src="https://picsum.photos/200" 
              className="w-28 h-28 rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
              alt="Avatar"
            />
            <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-900">
              <span className="material-icons-round text-sm">edit</span>
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-black tracking-tight">Arjun Sharma</h2>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">UID: 1234 5678 9012</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Contact Details</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-600 dark:text-slate-400 px-1">Phone Number</p>
              <input 
                className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl h-14 px-4 font-bold text-slate-700 dark:text-white"
                defaultValue="+91 98765 43210"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-600 dark:text-slate-400 px-1">Email ID</p>
              <input 
                className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl h-14 px-4 font-bold text-slate-700 dark:text-white"
                defaultValue="arjun.sharma@example.com"
              />
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="space-y-3">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Language Preference</h3>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-blue-200 dark:shadow-none">English</button>
            <button className="flex-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold">ಕನ್ನಡ</button>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Account Security</h3>
          <button className="w-full bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-slate-200 dark:border-slate-800 shadow-sm transition-all active:scale-[0.98]">
            <span className="font-bold">Change PIN/Password</span>
            <span className="material-icons-round text-slate-400">chevron_right</span>
          </button>
          <button 
            onClick={() => navigate('/feedback')}
            className="w-full bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-slate-200 dark:border-slate-800 shadow-sm transition-all active:scale-[0.98]"
          >
            <span className="font-bold">Send Feedback</span>
            <span className="material-icons-round text-slate-400">chat_bubble_outline</span>
          </button>
          <button className="w-full text-secondary font-black py-4 mt-4">Sign Out</button>
        </div>

        <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 dark:shadow-none transition-all active:scale-95">
          Save Changes
        </button>
      </main>
    </div>
  );
};

export default Profile;
