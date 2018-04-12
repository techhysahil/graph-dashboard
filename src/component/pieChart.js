import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import pieChart from './../data/pie-chart.json';

class PieChart extends Component {
  render() {
  	var className = "";
    if(this.props.layout === "fullwidth"){
      className = "fullWidth"
    }else if(this.props.layout === "halfwidth"){
      className = "halfWidth"
    }
  	
    return (
      <div className={"chart-wrapper "+className}>
        <div className="chart-title">Pie Chart</div>
        <Pie data={pieChart.data} options={pieChart.options} />
      </div>
    );
  }
}

export default PieChart;
