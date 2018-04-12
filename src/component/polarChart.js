import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';
import polarChart from './../data/polar-chart.json';

class PolarChart extends Component {
  render() {
  	var className = "";
    if(this.props.layout === "fullwidth"){
      className = "fullWidth"
    }else if(this.props.layout === "halfwidth"){
      className = "halfWidth"
    }
  	
    return (
      <div className={"chart-wrapper "+className}>
        <div className="chart-title">Polar Chart</div>
        <Polar data={polarChart} />
      </div>
    );
  }
}

export default PolarChart;
