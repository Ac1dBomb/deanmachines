import { Outlet } from '@remix-run/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import React, { useState, useEffect, PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="layout-container flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main className="layout-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}