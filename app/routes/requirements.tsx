import { Link } from "@remix-run/react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'; // Correct import
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export default function Requirements() {

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Requirements</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3 lg:w-1/2 max-w-prose">

                {/* Software Requirements */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span className="text-xl font-semibold">Software</span>
                                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-gray-500 dark:text-gray-400`}
                            </DisclosureButton>
                            <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300">
                                <ul className="list-disc list-inside">
                                    <li>Node.js and npm (or yarn)</li>
                                    <li>A suitable code editor (e.g., VS Code)</li>
                                    <li>A modern browser</li>
                                    <li>Git (for version control)</li>
                                </ul>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
                {/* Hardware Requirements */}
                <Disclosure as="div" className="mt-4">
                    {({ open }) => (
                        <>
                            <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span className="text-xl font-semibold">Hardware</span>
                                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-gray-500 dark:text-gray-400`}
                            </DisclosureButton>
                            <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600 dark:text-gray-300">
                                <ul className="list-disc list-inside">
                                    <li>A computer capable of running the software requirements.  Specifications will depend on the complexity of your data analysis tasks.</li>
                                    <li>Sufficient RAM is recommended for efficient data processing, especially with larger datasets.</li>
                                    {/* Add more hardware requirements as needed */}
                                </ul>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </div>
            <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                Go Back Home
            </Link>
        </div>
    );
}

