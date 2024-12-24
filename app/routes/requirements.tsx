import { Link } from "@remix-run/react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import '../styles/page.css';

export default function Requirements() {
    return (
        <div className="page-container">
            <h1 className="page-title">Requirements</h1>
            <div className="page-content">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span className="text-xl font-semibold">Software</span>
                                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500 dark:text-gray-400`} />
                            </DisclosureButton>
                            <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300">
                                <ul className="list-disc list-inside">
                                    <li>Node.js and npm (or yarn) for backend development</li>
                                    <li>A suitable code editor (e.g., VS Code)</li>
                                    <li>A modern browser for testing and development</li>
                                    <li>Git for version control</li>
                                    <li>Tailwind CSS for styling</li>
                                    <li>Remix for building the web application</li>
                                    <li>PyTorch for AI model training</li>
                                    <li>VectorDB for efficient data management</li>
                                </ul>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-4">
                    {({ open }) => (
                        <>
                            <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span className="text-xl font-semibold">Hardware</span>
                                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500 dark:text-gray-400`} />
                            </DisclosureButton>
                            <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300">
                                <table className="min-w-full bg-white dark:bg-gray-800">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Component</th>
                                            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Description</th>
                                            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Opinion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">NVIDIA Orin Nano</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">AI processing unit for running complex models.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Highly recommended for its powerful AI capabilities.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">TFmini-S</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Distance measurement sensor.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Accurate and reliable for short-range measurements.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Optical Flow Sensor</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Tracks motion by detecting changes in the visual field.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Essential for precise motion tracking.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">IR Beacon</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Used for navigation and positioning.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Useful for indoor navigation.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">IR Obstacle Avoidance Sensors</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Detects obstacles using infrared light.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Great for avoiding collisions in real-time.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Ultrasonic Sensors</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Measures distance using ultrasonic waves.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Reliable for medium-range distance measurements.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">AI Camera</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Captures visual data for AI processing.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Crucial for visual recognition and data collection.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Computer</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Capable of running software requirements.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Ensure it has sufficient RAM and a modern CPU/GPU.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Mini PC</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Compact computer for running AI models and processing data.</td>
                                            <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Recommended for its portability and efficiency in handling AI tasks.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-4">
                    {({ open }) => (
                        <>
                            <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span className="text-xl font-semibold">AI/ML/CV Knowledge</span>
                                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500 dark:text-gray-400`} />
                            </DisclosureButton>
                            <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300">
                                <ul className="list-disc list-inside">
                                    <li>Understanding of machine learning algorithms and models</li>
                                    <li>Experience with computer vision techniques</li>
                                    <li>Knowledge of deep learning frameworks (e.g., PyTorch, TensorFlow)</li>
                                    <li>Familiarity with data preprocessing and augmentation techniques</li>
                                    <li>Ability to train and evaluate AI models</li>
                                    <li>Experience with deploying AI models on edge devices</li>
                                    <li>Understanding of sensor fusion and data integration</li>
                                </ul>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </div>
            <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Interested in joining our project? Sign up to stay updated and contribute to the development of our autonomous AI drone.
                </p>
                <Link to="/form" className="mt-4 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Sign Up
                </Link>
            </div>
            <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                Go Back Home
            </Link>
        </div>
    );
}