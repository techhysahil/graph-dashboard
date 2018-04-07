import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import pieChart from './data/pie-chart.json';
import './App.css';

class pieChart extends Component {
  render() {
    return (
      <div className="chart-wrapper left">
        <div className="chart-title">Pie Chart</div>
        <Pie data={pieChart.data} options={pieChart.options} />
      </div>
    );
  }
}

export default pieChart;
