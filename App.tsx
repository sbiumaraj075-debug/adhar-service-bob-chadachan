
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments';
import Status from './pages/Status';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Notifications from './pages/Notifications';
import Help from './pages/Help';
import Feedback from './pages/Feedback';
import Locator from './pages/Locator';
import Documents from './pages/Documents';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to true for demo

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <HashRouter>
      <div className="min-h-screen max-w-md mx-auto relative bg-background-light dark:bg-background-dark shadow-2xl">
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<Auth onLogin={() => setIsLoggedIn(true)} />} />
          ) : (
            <>
              <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/bookings" element={<Appointments />} />
              <Route path="/status" element={<Status />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/help" element={<Help />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/locator" element={<Locator />} />
              <Route path="/documents" element={<Documents />} />
            </>
          )}
        </Routes>
        
        {isLoggedIn && <BottomNav />}
      </div>
    </HashRouter>
  );
};

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Bookings', icon: 'history', path: '/bookings' },
    { label: 'Status', icon: 'help_outline', path: '/status' },
    { label: 'Profile', icon: 'person_outline', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-8 py-3 pb-6 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            isActive(item.path) ? 'text-primary dark:text-blue-400' : 'text-slate-400'
          }`}
        >
          <span className="material-icons-outlined">{item.icon}</span>
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default App;
