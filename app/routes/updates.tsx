import { Link } from "@remix-run/react";
import { useState } from 'react';
import '../styles/tailwind.css';

interface Update {
    title: string;
    date: string;
    description: string;
}

const updates: Update[] = [
    {
        title: "Initial Release",
        date: "2024-07-26",
        description: "First version of the FPV data analysis prototype released. Includes basic data import and visualization capabilities."
    },
    {
        title: "Improved Data Processing",
        date: "2024-08-15",
        description: "Significant improvements to data processing speed and efficiency. Added support for larger datasets."
    },
];

export default function Updates() {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});

    const toggleExpansion = (id: number) => {
        setExpanded({ ...expanded, [id]: !expanded[id] });
    };

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Project Updates</h1>
            <div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
                {updates.map((update, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                {update.title}
                            </h2>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                {update.date}
                            </span>
                        </div>
                        <button
                            onClick={() => toggleExpansion(index)}
                            className="w-full text-left text-blue-500 hover:underline focus:outline-none"
                        >
                            {expanded[index] ? "Hide Details" : "Show Details"}
                        </button>
                        {expanded[index] && (
                            <div className="mt-4">
                                <p className="text-gray-600 dark:text-gray-300">
                                    {update.description}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link
                to="/"
                className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Go Back Home
            </Link>
        </div>
    );
}
