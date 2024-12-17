import { Link } from "@remix-run/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

// No need for RMWC List or Icon components anymore

// Interface for resource items
interface Resource {
    text: string;
    icon: string; // Still using icon names for consistency
    to?: string;
    href?: string;
    external?: boolean;
}


const ResourceItem: React.FC<Resource> = ({ text, icon, to, href, external }) => {
    const isExternal = !!external; // Clearer way to check for external links

    return (
        <li className="group"> {/* Group for hover effects */}
            {isExternal ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                    <span className="material-icons-outlined text-gray-600 dark:text-gray-300">
                        {icon}
                    </span> {/* Use Material Icons directly */}
                    <span className="text-gray-800 dark:text-gray-200 group-hover:underline">
                        {text}
                    </span>
                </a>
            ) : (
                 // Conditionally render the Link only if 'to' is defined
        to && ( 
            <Link
              to={to} // Now 'to' is guaranteed to be a string
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
                <span className="material-icons-outlined text-gray-600 dark:text-gray-300">
                {icon}
                </span>
                <span className="text-gray-800 dark:text-gray-200 hover:underline">
                {text}
                </span>
            </Link>
            )
            )}
        </li>
    );

};



export default function Index() {
    return (
        <ul className="mx-auto p-4 md:w-2/3 lg:w-1/2"> 
            {resources.map((resource) => (
                <ResourceItem key={resource.to ?? resource.href} {...resource} /> // Use ?? here
            ))}
        </ul>
    );
}


const resources: Resource[] = [ // Typed resource array
    { to: "/data", text: "Data Visualization", icon: "show_chart" },
    { to: "/requirements", text: "Requirements", icon: "settings" },
    { to: "/about", text: "About Dean Machines", icon: "info" }, // Fix typo here
    { href: "https://remix.run/docs", text: "Remix Docs", icon: "book", external: true },
    { href: "https://rmx.as/discord", text: "Join Discord", icon: "chat", external: true },
];

