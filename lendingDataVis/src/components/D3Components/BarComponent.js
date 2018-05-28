import React, { Component } from 'react';

export default class BarComponent extends Component {
  render () {
    const { fill, height, width, x, y } = this.props;
    return (
      <rect
        x={y}
        y={x}
        width={height}
        height={width}
        fill={fill}
      />
    );
  }
}
