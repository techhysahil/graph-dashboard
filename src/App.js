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
                return  <PieChart key={"PieChart"+index} layout={item.layout} />
              case "barChart":
                return  <BarChart key={"BarChart"+index} layout={item.layout} />
              case "polarChart":
                 return <PolarChart key={"PolarChart"+index} layout={item.layout} />
              case "lineChart":
                return  <LineChart key={"LineChart"+index} layout={item.layout} />
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
