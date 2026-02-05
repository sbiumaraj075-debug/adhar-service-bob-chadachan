<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aadhaar Service Portal</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Kannada:wght@400;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons+Round" rel="stylesheet" />
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#00529B",
              secondary: "#ED1C24",
              accent: "#FBBF24",
              "background-light": "#F8FAFC",
              "background-dark": "#0F172A",
              "card-light": "#FFFFFF",
              "card-dark": "#1C1C1E",
            },
            fontFamily: {
              sans: ["Inter", "Noto Sans Kannada", "sans-serif"],
              kannada: ["Noto Sans Kannada", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "12px",
            },
          },
        },
      };
    </script>
    <style>
      body {
        font-family: 'Inter', 'Noto Sans Kannada', sans-serif;
        -webkit-tap-highlight-color: transparent;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "react-router-dom": "https://esm.sh/react-router-dom@^7.13.0",
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4"
  }
}
</script>
</head>
  <body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
    <div id="root"></div>
  </body>
</html>
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);import React, { useState, useEffect } from 'react';
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
import { Service, AppointmentStatus, Appointment, Notification } from './types';

export const SERVICES: Service[] = [
  { id: '1', title: 'Update Name/DOB', subtitle: 'ಹೆಸರು ಮತ್ತು ಜನ್ಮ ದಿನಾಂಕ', icon: 'badge', color: 'blue' },
  { id: '2', title: 'Change Address', subtitle: 'ಹೊಸ ವಿಳಾಸ ಬದಲಾವಣೆ', icon: 'home', color: 'green' },
  { id: '3', title: 'Link Mobile', subtitle: 'ಮೊಬೈಲ್ ನಂಬರ್ ಲಿಂಕ್', icon: 'phonelink_setup', color: 'orange' },
  { id: '4', title: 'Biometric Update', subtitle: 'ಬಯೋಮೆಟ್ರಿಕ್ ಅಪ್‌ಡೇಟ್', icon: 'fingerprint', color: 'purple' },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'AP12345',
    serviceId: '1',
    customerName: 'Rajesh Kumar',
    phone: '+91 98XXX XXXXX',
    date: '12 Oct 2024',
    time: '10:30 AM - 11:00 AM',
    status: AppointmentStatus.PENDING,
    venue: 'Bank of Baroda Service Center'
  },
  {
    id: 'AP12346',
    serviceId: '3',
    customerName: 'Sudha N.',
    phone: '+91 73XXX XXXXX',
    date: '12 Oct 2024',
    time: '09:15 AM - 09:45 AM',
    status: AppointmentStatus.COMPLETED,
    venue: 'Main Post Office, Chadchan'
  },
  {
    id: 'AP12347',
    serviceId: '4',
    customerName: 'Manjunath K.',
    phone: '+91 88XXX XXXXX',
    date: '12 Oct 2024',
    time: '11:45 AM - 12:15 PM',
    status: AppointmentStatus.PENDING,
    venue: 'District Center, Bijapur'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'Appointment',
    message: 'Reminder: Appointment tomorrow at 10 AM',
    time: '10 min ago',
    isNew: true
  },
  {
    id: '2',
    type: 'Document Verification',
    message: 'Your PAN card has been verified',
    time: '20 min ago',
    isNew: true
  },
  {
    id: '3',
    type: 'Announcement',
    message: 'New service available: Aadhaar update via Mobile',
    time: '30 min ago',
    isNew: true
  },
  {
    id: '4',
    type: 'Application Status',
    message: 'Your application for Aadhaar update is under review',
    time: '2 hr ago',
    isNew: false
  }
];
{
  "name": "Aadhaar Service Portal",
  "description": "A comprehensive mobile-first portal for Aadhaar enrollment and update services, featuring appointment booking, document pre-verification, application tracking, and a service center locator.",
  "requestFramePermissions": []
}
