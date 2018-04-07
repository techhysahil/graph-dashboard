import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import barChart from './../data/bar-chart.json';

class BarChart extends Component {
  render() {
  	var className = "";
  	if(this.props.width === 100){
  		className = "fullWidth"
  	}else if(this.props.width === 50){
  		className = "halfWidth"
  	}

    return (
      <div className={"chart-wrapper"+" "+(className)}>
	    <div className="chart-title">Bar Chart</div>
	    <Bar data={barChart.data} options={barChart.options} />
	  </div>
    );
  }
}

export default BarChart;
