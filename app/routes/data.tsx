import { Link } from "@remix-run/react";
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { /* RMWC components you need for THIS component */ } from 'rmwc'; // Import only what you need
// eslint-disable-next-line import/no-duplicates
import React from 'react';

export default function DataVisualization() {
    const [selectedChart, setSelectedChart] = useState('line'); // Default chart type
    const [sampleData] = useState([
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ]);


    const handleChartChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChart(event.target.value);
    };

    // Placeholder for other chart types (e.g., BarChart, AreaChart)
    const renderChart = () => {
        switch (selectedChart) {
            case 'line':
                return (
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={sampleData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
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
            default:
                return <p>Chart type not yet implemented.</p>;
        }
    };

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">Data Visualization</h1>
            {/* Chart Type Selection */}
            <div className="mb-4 flex justify-center">  {/* Center the controls */}
                <label htmlFor="chartType" className="mr-2 text-gray-700 dark:text-gray-200">Chart Type:</label>
                <select
                    id="chartType"
                    value={selectedChart}
                    onChange={handleChartChange}
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1"
                >
                    <option value="line">Line Chart</option>
                    {/* Add more chart type options here */}
                </select>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-[500px]">
                {renderChart()}
            </div>
            {/* Go Back Home */}
            <div className="mt-8 flex justify-center"> {/* Center the Home link */}
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}



