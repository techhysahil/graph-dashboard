import React, { Component } from 'react';
import {Pie,Bar,Line,Polar} from 'react-chartjs-2';

import pieChart from './data/pie-chart.json';
import barChart from './data/bar-chart.json';
import linechart from './data/line-chart.json';
import polarChart from './data/polar-chart.json';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="chart-wrapper left">
            <div className="chart-title">Pie Chart</div>
            <Pie data={pieChart.data} options={pieChart.options} />
          </div>
          <div className="chart-wrapper">
            <div className="chart-title">Bar Chart</div>
            <Bar data={barChart.data} options={barChart.options} />
          </div>

          <div className="chart-wrapper left">
            <div className="chart-title">Line Chart</div>
            <Line data={linechart} />
          </div>
          <div className="chart-wrapper">
            <div className="chart-title">Polar Chart</div>
            <Polar data={polarChart} />
          </div>
      </div>
    );
  }
}

export default App;
