import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import './Chart.css'

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <h3 className='chart-title'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550BD" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550BD" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#E0DFDF' strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
