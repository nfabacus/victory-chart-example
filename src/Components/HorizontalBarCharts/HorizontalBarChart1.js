import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel, VictoryPortal, VictoryAxis } from 'victory';

const data = [
  { topic: "topic A", points: 80},
  {topic: "topic fsda sddf B", points: 24},
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

const HorizontalBarChart1 = () => (
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
);

export default HorizontalBarChart1;


