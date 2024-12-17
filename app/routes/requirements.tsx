// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import { Link } from "@remix-run/react";
import { /* RMWC components you need for THIS component */ } from 'rmwc'; // Import only what you need
// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/no-duplicates
import React from 'react';

export default function Requirements() {
    const [expandedDetails, setExpandedDetails] = useState(false);

    const toggleDetails = () => {
        setExpandedDetails(!expandedDetails);
    };

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Requirements</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3 lg:w-1/2">
                {/* Software Requirements */}
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Software</h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>Node.js and npm (or yarn)</li>
                        <li>A suitable code editor (e.g., VS Code)</li>
                        <li>A modern browser</li>
                        <li>Git</li>
                    </ul>
                </div>

                {/* Hardware Requirements (Optional, Expandable) */}
                <div className="mt-4">
                    <button 
                        onClick={toggleDetails}
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        {expandedDetails ? "Hide Hardware Requirements" : "Show Hardware Requirements"}
                    </button>
                    {expandedDetails && (
                        <div className="mt-2 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">Hardware</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                                <li>A computer capable of running the software requirements (adjust based on analysis tasks).</li>
                                <li>Sufficient RAM for data processing</li>
                            </ul>
                        </div>
                    )}
                </div>




            </div>

            <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                Go Back Home
            </Link>


        </div>
    );
}
