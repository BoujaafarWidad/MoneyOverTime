import React from 'react';
import MoneyOverTimeChart from './MoneyOverTimeChart';

const ChartContainer = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px' // ou la valeur que tu veux
    }}>
      <div style={{ width: '900px', height: '400px' }}>
        <MoneyOverTimeChart />
      </div>
    </div>
  );
};

export default ChartContainer;
