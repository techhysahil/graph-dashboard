import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import linechart from './../data/line-chart.json';

class LineChart extends Component {
  render() {
  	var className = "";
    if(this.props.layout === "fullwidth"){
      className = "fullWidth"
    }else if(this.props.layout === "halfwidth"){
      className = "halfWidth"
    }
  	
    return (
      <div className={"chart-wrapper "+className}>
        <div className="chart-title">Line Chart</div>
        <Line data={linechart} />
      </div>
    );
  }
}

export default LineChart;
