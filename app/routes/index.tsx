import { Link } from "@remix-run/react";
import '../styles/index.css'; // Ensure correct path
import '../styles/new_styles.css'; // Ensure correct path

export default function Index() {
    return (
        <div className="index-container">
            <div className="index-card">
                <h1 className="index-title">Dean Machines</h1>
                <p className="index-text">
                    Welcome to Dean Machines, the FPV prototype web app focused on documenting the journey of building and advancing an autonomous AI drone using cutting-edge technologies.
                </p>
                <p className="index-text mt-4">
                    <strong>Mission Statement:</strong> Our mission is to empower the FPV community with tools to unlock the full potential of their flight data. We believe that accessible and insightful data analysis can revolutionize how pilots understand and improve their performance.
                </p>
                <p className="index-text mt-4">
                    <strong>Our Vision:</strong> To create a true autonomous AI drone using the NVIDIA Orin Nano, TFmini-S, optical flow sensor, IR beacon, IR obstacle avoidance, ultrasonic sensors, and AI camera, while leveraging PyTorch for model training.
                </p>
                <p className="index-text mt-4">
                    <strong>Core Values:</strong>
                    <ul className="index-list">
                        <li>Innovation</li>
                        <li>Accessibility</li>
                        <li>Community</li>
                        <li>Excellence</li>
                    </ul>
                </p>
                <p className="index-text mt-4">
                    <strong>Features:</strong>
                    <ul className="index-list">
                        <li>Real-time data visualization</li>
                        <li>Comprehensive data analysis tools</li>
                        <li>User-friendly interface</li>
                        <li>Support for various data formats</li>
                        <li>Open source dataset for training AI models</li>
                        <li>Integration with VectorDB for efficient data management</li>
                    </ul>
                </p>
                <div className="index-footer">
                    <p className="index-footer-text">
                        Created by Sam. This project is open source and available under the MIT License. Contributions and feedback are welcome!
                    </p>
                </div>
            </div>
            <div className="index-link">
                <Link to="/data" className="button">
                    Data Visualization
                </Link>
                <Link to="/requirements" className="button">
                    Requirements
                </Link>
                <Link to="/about" className="button">
                    About Dean Machines
                </Link>
                <Link to="/contact" className="button">
                    Contact Us
                </Link>
                <Link to="/form" className="button">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

