import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel, VictoryPortal, VictoryAxis } from 'victory';

const data = [
  { topic: "topic A", points: 80},
  {topic: "topic fsda B", points: 24},
  {topic: "topic C", points: 6},
  {topic: "topic D", points: 50},
  { topic: "topic e", points: 80},
  {topic: "topic fsda f", points: 24},
  {topic: "topic g", points: 6},
  {topic: "topic h", points: 50}
].map((d)=> {
    const foldedTopic = d.topic.replace(" ", "\n");
    return { ...d, topic: foldedTopic }
  });
// forEach works as well, but mutating the object, so map may be better.
// data.forEach(d => d.topic = d.topic.replace(" ", "\n"));


const VerticalBarChart1 = () => (
  <div style={{ maxWidth: "800px", margin: "auto" }}>
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      padding={{ left: 0, top: 50, right: 0, bottom: 50 }}
    >
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>} />
      <VictoryAxis
        tickLabelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>} />
      <VictoryBar
        data={data}
        y="points"
        x="topic"
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
      />
    </VictoryChart>
  </div>
);

export default VerticalBarChart1;


