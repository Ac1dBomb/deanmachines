import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from '@remix-run/node';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import '../styles/data.css'; // Ensure correct path

const fetchDataFromAPI = async () => {
    // Replace with actual API call
    return [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
};

interface ChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

export const loader: LoaderFunction = async () => {
    return await fetchDataFromAPI();
};

export default function DataVisualization() {
    const data = useLoaderData<typeof loader>() as ChartData[];
    const [selectedChart, setSelectedChart] = useState('line'); // Default chart type
    const [sampleData, setSampleData] = useState(data);

    const handleChartChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChart(event.target.value);
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result as string;
                const data = JSON.parse(text);
                setSampleData(data);
            };
            reader.readAsText(file);
        }
    };

    const renderChart = () => {
        switch (selectedChart) {
            case 'line':
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={sampleData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                );
            case 'bar':
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={sampleData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                );
            case 'area':
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart data={sampleData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                    </ResponsiveContainer>
                );
            default:
                return <p>Chart type not yet implemented.</p>;
        }
    };

    return (
        <div className="data-container">
            <h1 className="data-title">Data Visualization</h1>
            {/* Chart Type Selection */}
            <div className="data-controls">
                <label htmlFor="chartType" className="mr-2 text-gray-700 dark:text-gray-200">Chart Type:</label>
                <select
                    id="chartType"
                    value={selectedChart}
                    onChange={handleChartChange}
                    className="data-select"
                >
                    <option value="line">Line Chart</option>
                    <option value="bar">Bar Chart</option>
                    <option value="area">Area Chart</option>
                </select>
            </div>
            <div className="data-controls">
                <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="data-upload"
                />
            </div>
            <div className="data-chart">
                {renderChart()}
            </div>
            {/* Go Back Home */}
            <div className="data-link">
                <Link
                    to="/"
                    className="button"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}