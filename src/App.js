import React, { Component } from 'react';
import './App.css';
import HorizontalBarChart1 from './Components/HorizontalBarCharts/HorizontalBarChart1';
import VerticalBarChart1 from './Components/VerticalBarCharts/VerticalBarChart1';
import PieChart1 from './Components/PieCharts/PieChart1';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign: "center"}}>Victory Chart Examples</h1>
        <HorizontalBarChart1 />
        <VerticalBarChart1 />
        <PieChart1 />
      </div>
    );
  }
}

export default App;
