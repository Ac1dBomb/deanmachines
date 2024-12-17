import { Link } from "@remix-run/react";
import { useState } from 'react';
import { /* RMWC components you need for THIS component */ } from 'rmwc'; // Import only what you need
// eslint-disable-next-line no-unused-vars
import React from 'react';
// Sample update data (replace with your actual data)
const updates = [
    {
        title: "Initial Release",
        date: "2024-07-26",
        description: "First version of the FPV data analysis prototype released.  Includes basic data import and visualization capabilities."
    },
    {
        title: "Improved Data Processing",
        date: "2024-08-15",
        description: "Significant improvements to data processing speed and efficiency.  Added support for larger datasets."
    },
    // Add more updates here...
];


export default function Updates() {
    const [expanded, setExpanded] = useState({});

    const toggleExpansion = (id) => {
        setExpanded({...expanded, [id]: !expanded[id]});
    }
    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Project Updates</h1>

            <div className="w-full md:w-2/3 lg:w-1/2">
                {updates.map((update, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{update.title}</h2>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{update.date}</span>
                        </div>
                        <button className="w-full text-left text-blue-500 hover:underline focus:outline-none" onClick={() => toggleExpansion(index)}>
                            {expanded[index] ? "Hide Details" : "Show Details"}
                        </button>
                        {expanded[index] && (
                            <div className="mt-2">
                                <p className="text-gray-600 dark:text-gray-300">{update.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                Go Back Home
            </Link>
        </div>
    );
}
