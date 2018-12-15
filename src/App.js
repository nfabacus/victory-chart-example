import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel, VictoryPortal, VictoryAxis } from 'victory';
import './App.css';

const data = [
  { topic: "topic fdsafsAbcd", points: 80},
  {topic: "topic fsda B", points: 24},
  {topic: "topic C", points: 6},
  {topic: "topic D", points: 50}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign: "center"}}>Victory Chart Example</h1>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            padding={{ left: 90, top: 50, right: 10, bottom: 50 }}
          >
            <VictoryAxis
              dependentAxis
              tickLabelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>} />
            <VictoryAxis
              tickLabelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>} />
            <VictoryBar horizontal
                        data={data}
                        y="points"
                        x="topic"
            />
          </VictoryChart>
        </div>

      </div>
    );
  }
}

export default App;
