import { Link } from "@remix-run/react";
import '../styles/tailwind.css';
export default function AboutUs() {
    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3 lg:w-1/2 max-w-prose"> {/* Max width for readability */}
                <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">About Dean Machines</h1>

                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Dean Machines is an FPV prototype web app focused on data analysis for drone systems.  Our mission is to empower the FPV community with tools to unlock the full potential of their flight data. We believe that accessible and insightful data analysis can revolutionize how pilots understand and improve their performance.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4"> {/* Margin top for spacing */}
                    Our platform leverages cutting-edge technologies including:
                    <ul className="list-disc list-inside mt-2"> {/* Added a list */}
                        <li>Advanced data visualization libraries (e.g., Recharts)</li>
                        <li>Robust data processing algorithms</li>
                        <li>Intuitive user interfaces designed for FPV enthusiasts</li>
                    </ul>
                </p>


                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    We aim to make complex flight data easily digestible and actionable, providing pilots with the knowledge they need to enhance their skills and push the boundaries of FPV flight.
                </p>

                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4"> {/* Section break */}
                    <p className="text-gray-600 dark:text-gray-400">
                        Created by Sam. This project is open source and available under the MIT License.  Contributions and feedback are welcome!
                    </p>
                    {/* Add a link to your GitHub repo or contact info if desired */}
                </div>


            </div>
            <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                Go Back Home
            </Link>
        </div>
    );
}

