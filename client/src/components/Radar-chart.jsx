import React from 'react';
import Chart from 'react-apexcharts';

const RadarChart = () => {
  // Dummy data for radar chart
  const series = [{
    name: 'Series 1',
    data: [3, 5, 1, 6, 7],
  }];

  const options = {
    chart: {
      type: 'radar',
    },
    xaxis: {
      categories: ['Form-type 1', 'Form-type 2', 'Form-type 3', 'Form-type 4', 'Form-type 5'],
    },
  };

  return (
    <>
      <Chart options={options} series={series} type="radar" height={350} />
    </>
  );
};

export default RadarChart;
