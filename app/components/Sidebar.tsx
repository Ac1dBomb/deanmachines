import { Link } from "@remix-run/react";
import '../styles/tailwind.css'; // Ensure correct path

export default function Sidebar() {
    return (
        <aside className="bg-gray-100 dark:bg-gray-800 w-64 h-full fixed top-0 left-0 shadow-lg">
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Navigation</h2>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/updates" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                Updates
                            </Link>
                        </li>
                        <li>
                            <Link to="/requirements" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                Requirements
                            </Link>
                        </li>
                        <li>
                            <Link to="/data" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                Data
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
