
import React, { useState } from 'react';

interface AuthProps {
  onLogin: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [view, setView] = useState<'login' | 'register' | 'otp'>('login');

  const renderLogin = () => (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col pt-24 px-6 gap-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-black tracking-tighter text-primary dark:text-blue-400">Aadhaar Portal</h1>
        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Sign in to continue</p>
      </div>

      <div className="space-y-4">
        <input 
          placeholder="Mobile Number / Aadhaar" 
          className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl h-14 px-4 font-bold shadow-sm focus:ring-primary"
        />
        <input 
          type="password"
          placeholder="Password / PIN" 
          className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl h-14 px-4 font-bold shadow-sm focus:ring-primary"
        />
        <button 
          onClick={() => setView('otp')}
          className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 dark:shadow-none transition-all active:scale-95"
        >
          Login
        </button>
        
        <div className="flex flex-col gap-2 items-center text-xs font-bold text-slate-400">
          <button className="underline">Forgot Password?</button>
          <button onClick={() => setView('register')} className="underline">New User? Register Now</button>
        </div>
      </div>

      {/* Social / Virtual Keyboard Decorative */}
      <div className="mt-auto pb-12 opacity-20 pointer-events-none">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9MRXXBxbZFdPHgApTfCmgfCg1_wfCd_JZP-oQQ-rWdw21jXyEtBbYB0lZ0Z8_oUvVOuuzlcfV65WgkXTqc1kr3LUdkkkjcygRh6U-ZO2H70Fk4QSo79cxFGxA7RlnfGCyKTEj4O8ezMGdnpUD242tJ6J9m8g0lMVmM9hm7RMfS07iLnu_zRRk4aQmnb2a3A6hcUfftUM6fHQi0d_pJrG4PrBUKplmdMbiRYvlQcTvu0KrpDDWirYqJIbEkMXppkqwlnrgOjbi7rqk" className="mx-auto grayscale" alt="" />
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col pt-16 px-6 gap-8">
      <header className="flex items-center gap-4">
        <button onClick={() => setView('login')} className="p-2"><span className="material-icons-round">arrow_back</span></button>
        <h2 className="text-xl font-black">Register</h2>
      </header>

      <div className="space-y-4">
        {['Full Name', 'Mobile Number', 'Email ID', 'Create PIN'].map(p => (
          <input 
            key={p}
            placeholder={p} 
            className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl h-14 px-4 font-bold shadow-sm"
          />
        ))}
        
        <div className="flex items-center gap-3 py-2">
          <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
          <p className="text-xs font-bold text-slate-500">I agree to the terms and conditions</p>
        </div>

        <button 
          onClick={() => setView('otp')}
          className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 dark:shadow-none transition-all active:scale-95"
        >
          Register
        </button>

        <button onClick={() => setView('login')} className="w-full text-primary font-bold text-xs underline">Already have an account? Sign in</button>
      </div>
    </div>
  );

  const renderOTP = () => (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col pt-16 px-6 gap-8">
      <header className="flex items-center gap-4">
        <button onClick={() => setView('login')} className="p-2"><span className="material-icons-round">arrow_back</span></button>
        <h2 className="text-xl font-black">Verification</h2>
      </header>

      <div className="space-y-2">
        <h1 className="text-2xl font-black tracking-tight">Enter the OTP</h1>
        <p className="text-xs font-bold text-slate-500 leading-relaxed">
          We have sent a 4-digit OTP to your registered mobile number ending with 9876.
        </p>
      </div>

      <div className="flex gap-4 justify-center py-4">
        {[1,2,3,4].map(i => (
          <input key={i} maxLength={1} className="w-14 h-16 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-center text-2xl font-black focus:border-primary focus:ring-0 transition-all shadow-sm" />
        ))}
      </div>

      <div className="space-y-4">
        <button 
          onClick={onLogin}
          className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 dark:shadow-none transition-all active:scale-95"
        >
          Verify & Proceed
        </button>
        <button className="w-full text-slate-400 font-bold text-xs">Resend OTP (45s)</button>
      </div>
    </div>
  );

  return view === 'login' ? renderLogin() : view === 'register' ? renderRegister() : renderOTP();
};

export default Auth;
