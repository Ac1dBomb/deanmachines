import { Link } from "@remix-run/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import '../styles/tailwind.css';

export default function Index() {
    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3 lg:w-1/2 max-w-prose">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">Dean Machines</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                    Welcome to Dean Machines, the FPV prototype web app focused on data analysis for drone systems.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Mission Statement:</strong> Our mission is to empower the FPV community with tools to unlock the full potential of their flight data. We believe that accessible and insightful data analysis can revolutionize how pilots understand and improve their performance.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Our Vision:</strong> To be the leading platform for FPV data analysis, providing pilots with the knowledge they need to enhance their skills and push the boundaries of FPV flight.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Core Values:</strong>
                    <ul className="list-disc list-inside mt-2">
                        <li>Innovation</li>
                        <li>Accessibility</li>
                        <li>Community</li>
                        <li>Excellence</li>
                    </ul>
                </p>
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        Created by Sam. This project is open source and available under the MIT License. Contributions and feedback are welcome!
                    </p>
                </div>
            </div>
            <div className="mt-8 flex flex-col items-center space-y-4">
                <Link to="/data" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Data Visualization
                </Link>
                <Link to="/requirements" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Requirements
                </Link>
                <Link to="/about" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    About Dean Machines
                </Link>
                <Link to="/contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}

