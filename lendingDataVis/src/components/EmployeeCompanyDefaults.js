import React, { Component } from 'react';
import BarChart from './D3Components/BarChart';

export default class BarChartPage extends Component {
  render () {
    const chartWidth = 500;
    const chartHeight = 250;
    const sampleData = [5, 15, 10, 20, 25, 5, 30];
    return (
      <div>
        <BarChart
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          data={sampleData}
        />
      </div>
    );
  }
}