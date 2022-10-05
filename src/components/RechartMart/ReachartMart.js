import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ReachartMart = () => {

    const data = [
        {
            name: "Page A",
            Marks: 4000,
            Quiz: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            Marks: 3000,
            Quiz: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            Marks: 2000,
            Quiz: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            Marks: 2780,
            Quiz: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            Marks: 1890,
            Quiz: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            Marks: 2390,
            Quiz: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            Marks: 3490,
            Quiz: 4300,
            amt: 2100
        }
    ];

    return (
        <div>
            <h1 className='text-4xl font-bold text-white bg-indigo-300 py-5 mb-5'>Course Analises</h1>
            <LineChart width={1500} height={500} data={data} >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="Quiz"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="Marks" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default ReachartMart;