import React, { Component } from 'react';
import BarChart from './D3Components/BarChart';

export default function EmployeeCompanyDefaults(props) {
  const chartWidth = 200;
  const chartHeight = 200;
  const defaultNumbers = [props.defaultData['Fully Paid'], props.defaultData['Charged Off']]
  
  return (
    <div>
      <BarChart
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        data={defaultNumbers}
      />
    </div>
  );
}
