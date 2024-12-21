import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const PowerConsumptionChart = () => {
  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    datasets: [
      {
        label: 'Power Consumption',
        data: [60, 80, 50, 90, 70, 100],
        backgroundColor: 'rgba(0, 123, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px' ,backgroundColor:'white'}}>
      <h3>Power Consumption</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PowerConsumptionChart;
