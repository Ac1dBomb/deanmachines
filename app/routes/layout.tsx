import { Outlet } from '@remix-run/react';
import Navbar from '../components/Navbar';
import '../styles/layout.css'; // Ensure correct path

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="layout-main">
                {children}
                <Outlet />
            </main>
            <footer className="layout-footer">
                <p>© 2023 Dean Machines. All rights reserved.</p>
            </footer>
        </div>
    );
}
