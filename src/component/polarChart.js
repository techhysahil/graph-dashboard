import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';
import polarChart from './../data/polar-chart.json';

class PolarChart extends Component {
  render() {
  	var className = "";
    if(this.props.data.layout === "fullwidth"){
      className = "fullWidth"
    }else if(this.props.data.layout === "halfwidth"){
      className = "halfWidth"
    }
  	
    return (
      <div className={"chart-wrapper "+className}>
        <div className="chart-title">{this.props.data.title}</div>
        <Polar data={polarChart} />
      </div>
    );
  }
}

export default PolarChart;
