import { Link, useLocation } from "@remix-run/react";
import { useState, useCallback } from 'react';
import '../styles/tailwind.css'; // Ensure correct path

function MobileNavIcon({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
            <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
        </button>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = useCallback(() => {
        setOpen(false);
    }, []);

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Updates", to: "/updates" },
        { label: "Requirements", to: "/requirements" },
        { label: "Data", to: "/data" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" }
    ];

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Dean Machines</span>
                    </Link>
                    <MobileNavIcon open={open} setOpen={setOpen} />
                    <div className="hidden lg:flex space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={handleLinkClick}
                                className={`text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white ${
                                    location.pathname === link.to ? 'font-bold underline' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className={`lg:hidden ${open ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg`}>
                        <div className="px-4 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={handleLinkClick}
                                    className={`block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white ${
                                        location.pathname === link.to ? 'font-bold underline' : ''
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
