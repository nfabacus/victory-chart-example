import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';

let data = [
  { x: 1, label: "topic A", y: 60},
  { x: 2, label: "topic fsda B", y: 24},
  { x: 3, label: "topic C", y: 6},
  { x: 4, label: "topic D", y: 50}
].map((d)=> {
    const foldedTopic = d.label.replace(" ", "\n");
    return { ...d, x: foldedTopic }
  });

// forEach works as well, but mutating the object, so map may be better.
// data.forEach(d => d.topic = d.topic.replace(" ", "\n"));


const PieChart1 = () => (
  <div style={{ maxWidth: "800px", margin: "auto" }}>
    <VictoryPie
      data={data}
      innerRadius={50}  //can make a hole in the origin (center) of the pie chart.
      sortKey="y"  // sort by
      sortOrder="ascending"  //sort order by
      colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}  //adds colors to segments.
      labelRadius={85}  // labels position (distance) from the origin (center).
      style={{ labels: { fill: "grey", fontSize: 10, fontWeight: "bold" } }} //can style parent, data, labels.
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
    />
  </div>
);

export default PieChart1;


