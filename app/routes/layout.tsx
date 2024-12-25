import React from 'react';
import { Outlet, useNavigate } from '@remix-run/react';
import { useDarkMode } from '~/context/DarkModeContext';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        isLoggedIn={false} 
        onLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;