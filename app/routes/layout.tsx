import { Outlet } from '@remix-run/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

export default function Layout() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout}
          darkMode={darkMode}
          setDarkMode={toggleDarkMode}
        />
        <button onClick={toggleDarkMode}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <main className="layout-main p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}