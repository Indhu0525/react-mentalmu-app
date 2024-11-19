import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    // Define the 'dates' array for the first graph
    const dates1 = [
      { x: new Date(2023, 0, 1), y: 10 },
      { x: new Date(2023, 1, 1), y: 15 },
      { x: new Date(2023, 2, 1), y: 20 },
      { x: new Date(2023, 3, 1), y: 15 },
      { x: new Date(2023, 4, 1), y: 10 },
      { x: new Date(2023, 5, 1), y: 5 },
      { x: new Date(2023, 6, 1), y: 8 },
      { x: new Date(2023, 7, 1), y: 12 },
      { x: new Date(2023, 8, 1), y: 18 },
      { x: new Date(2023, 9, 1), y: 22 },
      { x: new Date(2023, 10, 1), y: 27 },
      { x: new Date(2023, 11, 1), y: 30 },
    ];

    // Define the 'dates' array for the second graph
    const dates2 = [
      { x: new Date(2023, 0, 1), y: 40 },
      { x: new Date(2023, 1, 1), y: 35 },
      { x: new Date(2023, 2, 1), y: 30 },
      { x: new Date(2023, 3, 1), y: 25 },
      { x: new Date(2023, 4, 1), y: 20 },
      { x: new Date(2023, 5, 1), y: 15 },
      { x: new Date(2023, 6, 1), y: 12 },
      { x: new Date(2023, 7, 1), y: 18 },
      { x: new Date(2023, 8, 1), y: 24 },
      { x: new Date(2023, 9, 1), y: 28 },
      { x: new Date(2023, 10, 1), y: 33 },
      { x: new Date(2023, 11, 1), y: 40 },
    ];

    this.state = {
      series: [
        {
          name: 'Graph 1',
          data: dates1,  // First graph data
        },
        {
          name: 'Graph 2',
          data: dates2,  // Second graph data
        },
      ],
      options: {
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',  // Ensure smooth curve for both graphs
          width: [2, 2],     // Set the width of each line
        },
        markers: {
          size: 1,          // Marker size for both lines
        },
        colors: [],  // Colors for both graphs (first is red, second is green)
        xaxis: {
          type: 'datetime',  // X-axis uses datetime
        },
        yaxis: {
          min: 0,
          max: 20,
          tickAmount: 5,
          labels: {
            formatter: function (value) {
              return value % 5 === 0 ? value : ''; // Display only multiples of 5
            },
          },
        },
        legend: {
          show: false,  // Show the legend to differentiate the two graphs
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={160}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;
