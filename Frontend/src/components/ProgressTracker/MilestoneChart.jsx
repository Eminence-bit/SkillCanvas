import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const MilestoneChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.milestone),
    datasets: [
      {
        label: 'Milestone Completion',
        data: data.map(item => (item.completed ? 1 : 0)),
        backgroundColor: 'rgba(75,192,192,0.6)'
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default MilestoneChart;
