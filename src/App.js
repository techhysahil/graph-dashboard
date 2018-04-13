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
      chartConfig : window.GRAPH_INTERFACE.data
    }
    this.renderCharts = this.renderCharts.bind(this);
  }

  componentDidMount(){
    window.addEventListener('addNewGraph', (event) => {
      this.setState({
        chartConfig : [...this.state.chartConfig,event.detail]
      })
    }, false);
  }

  renderCharts(){
    return(
        this.state.chartConfig.map((item,index) => {
          switch (item.type) {
              case "pieChart":
                return  <PieChart key={"PieChart"+index} data={item} />
              case "barChart":
                return  <BarChart key={"BarChart"+index} data={item} />
              case "polarChart":
                 return <PolarChart key={"PolarChart"+index} data={item} />
              case "lineChart":
                return  <LineChart key={"LineChart"+index} data={item} />
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
