import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  DateTime,
  Tooltip,
  SplineSeries,
} from '@syncfusion/ej2-react-charts';

const chartData = [
  { x: new Date(2023, 1, 14), y1: 10000, y2: 14000 },
  { x: new Date(2023, 1, 15), y1: 16259, y2: 10790 },
  { x: new Date(2023, 1, 16), y1: 11000, y2: 15500 },
  { x: new Date(2023, 1, 17), y1: 18000, y2: 11000 },
  { x: new Date(2023, 1, 18), y1: 18000, y2: 17000 },
  { x: new Date(2023, 1, 19), y1: 12000, y2: 19000 },
  { x: new Date(2023, 1, 20), y1: 20000, y2: 17000 },
];

const RevenueChart = () => {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
        labelFormat: 'MMM dd', // Custom date format
        majorGridLines: { width: 0 },
        intervalType: 'Days', // Display labels as per day
        labelIntersectAction: 'None',
      }}
      primaryYAxis={{
     
        maximum: 20000, // Maximum y-axis value
        interval: 5000, // Steps for y-axis values
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelFormat: '${value}',
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, shared: true }}
      legendSettings={{ visible: true }}
    >
      <Inject services={[SplineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="x"
          yName="y1"
       
          type="Spline"
          width={2}
        />
        <SeriesDirective
          dataSource={chartData}
          xName="x"
          yName="y2"
      
          type="Spline"
          width={2}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default RevenueChart;
