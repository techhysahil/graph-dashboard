import React, { Component } from 'react';
import {Pie,Bar,Line,Polar} from 'react-chartjs-2';

import PieChart from './component/pieChart.js';
import LineChart from './component/lineChart.js';
import BarChart from './component/barChart.js';
import PolarChart from './component/polarChart.js';

import './App.css';

class App extends Component {
  constructor(props) {
    // super gives us our context for 'this'
    super(props);
    this.state = {
      chartConfig : [
        {
          type : "lineChart",
          width : 50,
        },
        {
          type : "barChart",
          width : 50,
        },
        {
          type : "polarChart",
          width : 100,
        },
        {
          type : "pieChart",
          width : 100,
        }
      ]
    }
    this.renderCharts = this.renderCharts.bind(this);
  }

  renderCharts(){
    return(
        this.state.chartConfig.map((item,index) => {
          switch (item.type) {
              case "pieChart":
                return  <PieChart width={item.width} />
                  break;
              case "barChart":
                return  <BarChart width={item.width} />
                  break;
              case "polarChart":
                 return <PolarChart width={item.width} />
                  break;
              case "lineChart":
                return  <LineChart width={item.width} />
          }
        })    
      )
  }

  render() {
    return (
      <div className="App">
        {this.renderCharts()}
      </div>
    );
  }
}

export default App;
