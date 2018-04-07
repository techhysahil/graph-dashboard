import React, { Component } from 'react';
import PieChart from './component/pieChart.js';
import LineChart from './component/lineChart.js';
import BarChart from './component/barChart.js';
import PolarChart from './component/polarChart.js';
import graphConfig from './graphConfig.json';

import './App.css';

class App extends Component {
  constructor(props) {
    // super gives us our context for 'this'
    super(props);
    this.state = {
      chartConfig : graphConfig
    }
    this.renderCharts = this.renderCharts.bind(this);
  }

  renderCharts(){
    return(
        this.state.chartConfig.map((item,index) => {
          switch (item.type) {
              case "pieChart":
                return  <PieChart key={"PieChart"+index} width={item.width} />
              case "barChart":
                return  <BarChart key={"PieChart"+index} width={item.width} />
              case "polarChart":
                 return <PolarChart key={"PieChart"+index} width={item.width} />
              case "lineChart":
                return  <LineChart key={"PieChart"+index} width={item.width} />
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
