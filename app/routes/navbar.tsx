import { Link, useLocation } from "@remix-run/react";
import { useState, useCallback } from 'react';
import '../styles/tailwind.css';


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
                        <button
                            onClick={() => console.log('Action item clicked')}
                            className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white"
                            aria-label="Settings"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.95 1.95 0 01-1.37 1.23l-.46 1.66A11.03 11.03 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10a11.03 11.03 0 00-2.67-5.81l-.45-1.66a1.95 1.95 0 01-1.37-1.23zM12 6a1 1 0 11-2 0 1 1 0 012 0zm7 9a1 1 0 11-2 0 1 1 0 012 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
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
