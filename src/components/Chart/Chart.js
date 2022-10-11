import React from 'react';
import './Chart.css';
import { useLoaderData } from 'react-router-dom';
import { Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Chart = () => {
    const arrayOfData = useLoaderData();
    const data = arrayOfData.data;
    return (
        <div>
            <LineChart className='m-auto chart' width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;