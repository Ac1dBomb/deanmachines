import { Outlet } from '@remix-run/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="layout-container flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
                <main className="layout-main">
                    {children}
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}
