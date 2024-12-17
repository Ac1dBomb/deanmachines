import { Link } from "@remix-run/react";
import { /* RMWC components you need for THIS component */ } from 'rmwc'; // Import only what you need


export default function AboutUs() {
    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900"> {/* Tailwind classes */}
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Dean Machines</h1> {/* Tailwind classes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3 lg:w-1/2"> {/* Tailwind classes */}
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Dean Machines is an FPV prototype web app focused on data analysis for drone systems. Our goal is to create tools for the FPV community to better understand the data they generate from their flights.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    We utilize various modern technologies to analyze data, and make useful data visualization tools. We aim to make the data easily understandable for everyone.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Created by Sam, this project is an open source initiative under the MIT License, and is constantly being improved.
                </p>
            </div>
            <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"> {/* Tailwind classes */}
                Go Back Home
            </Link>
        </div>
    );
}
