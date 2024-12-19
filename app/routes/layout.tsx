import { Outlet } from '@remix-run/react';
import Navbar from '../components/Navbar';
import '../styles/tailwind.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">
                {children}
                <Outlet />
            </main>
        </div>
    );
}
