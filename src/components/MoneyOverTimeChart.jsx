import React from "react";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moneyData from '../data/moneyData';

const MoneyOverTimeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart width={400} height={400} data={moneyData}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="time"
          tickFormatter={(date) => {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return new Date(date).toLocaleDateString('fr-FR', options);
          }}
        />
        <YAxis domain={['dataMin - 20', 'dataMax + 20']} />
        <Tooltip formatter={(value) => `${value}€`} />
        <Line type="monotone" dataKey="amount" stroke="#df3a08" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MoneyOverTimeChart;