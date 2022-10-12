import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const quizData = data.data;
    return (
        <div className='chart'>
            <ResponsiveContainer width="100%" height={200} >
                <AreaChart
                    data={quizData}

                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fill: 'indianred' }} tickLine={{ stroke: 'white' }} />
                    <YAxis tick={{ fill: 'indianred' }} tickLine={{ stroke: 'indianred' }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="grey" fill="#5765fb" />
                </AreaChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;