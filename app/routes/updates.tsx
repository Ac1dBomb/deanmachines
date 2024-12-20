import { Link } from "@remix-run/react";
import { useState } from 'react';
import '../styles/updates.css'; // Ensure correct path

interface Update {
    title: string;
    date: string;
    description: string;
    details: string;
}

const updates: Update[] = [
    {
        title: "Initial Release",
        date: "2024-07-26",
        description: "First version of the FPV data analysis prototype released.",
        details: "Includes basic data import and visualization capabilities. Users can upload their flight data and visualize it using various charts and graphs."
    },
    {
        title: "Improved Data Processing",
        date: "2024-08-15",
        description: "Significant improvements to data processing speed and efficiency.",
        details: "Added support for larger datasets and optimized the data processing algorithms to handle more complex data structures."
    },
    {
        title: "New Visualization Tools",
        date: "2024-09-10",
        description: "Introduced new data visualization tools.",
        details: "Added support for 3D visualizations and interactive charts. Users can now explore their data in more detail and gain deeper insights."
    },
    {
        title: "Integration with NVIDIA Orin Nano",
        date: "2024-10-05",
        description: "Integrated the NVIDIA Orin Nano for enhanced AI capabilities.",
        details: "Leveraged the power of the NVIDIA Orin Nano to run complex AI models for autonomous drone navigation and obstacle avoidance."
    },
    {
        title: "Sensor Integration",
        date: "2024-11-20",
        description: "Integrated various sensors for enhanced data collection.",
        details: "Added support for TFmini-S, optical flow sensor, IR beacon, IR obstacle avoidance, ultrasonic sensors, and AI camera to collect comprehensive flight data."
    },
    {
        title: "Open Source Dataset",
        date: "2025-01-15",
        description: "Released an open source dataset for training AI models.",
        details: "Created a dataset from collected flight data and made it available for the community to use in training their own AI models."
    },
];

export default function Updates() {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});

    const toggleExpansion = (id: number) => {
        setExpanded({ ...expanded, [id]: !expanded[id] });
    };

    return (
        <div className="updates-container">
            <h1 className="updates-title">Project Updates</h1>
            <div className="updates-list">
                {updates.map((update, index) => (
                    <div
                        key={update.date}
                        className="update-card"
                    >
                        <div className="update-header">
                            <h2 className="update-title">
                                {update.title}
                            </h2>
                            <span className="update-date">
                                {update.date}
                            </span>
                        </div>
                        <button
                            onClick={() => toggleExpansion(index)}
                            className="update-toggle"
                        >
                            {expanded[index] ? "Hide Details" : "Show Details"}
                        </button>
                        {expanded[index] && (
                            <div className="update-details">
                                <p className="update-description">
                                    {update.description}
                                </p>
                                <p className="update-details-text">
                                    {update.details}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link
                to="/"
                className="button"
            >
                Go Back Home
            </Link>
        </div>
    );
}
