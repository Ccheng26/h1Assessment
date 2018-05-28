import React, { Component } from 'react';
import BarComponent from './BarComponent';
import { scaleBand, scaleLinear, scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { max } from 'd3-array';

export default class BarChart extends Component {
  renderBars = () => {
    const { chartWidth, data, chartHeight } = this.props;
    // Scale used to get width and step
    const scaleX = scaleBand()
      .domain(data)
      .range([0, chartWidth])
      .paddingInner(0.02);
    
    const barWidth = scaleX.bandwidth();
    const barXStep = scaleX.step();

    // Scale to get height for each bar
    const scaleY = scaleLinear()
      .domain([0, max(data)])
      .range([0, chartHeight]);

    const bars = data.map( (d, i) => {
      return (
        <BarComponent
          key={i}
          y={0}
          x={barXStep * i}
          width={barWidth}
          height={scaleY(d)}
        />
      );
    });
    return bars;
  }

  render () {
    const { chartWidth, chartHeight } = this.props;

    return (
      <div>
        <svg width={chartWidth} height={chartHeight}>
          {this.renderBars()}
        </svg>
      </div>
    );
  }
}