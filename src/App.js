import React, { useState, useEffect } from 'react';
import BarChart from "./components/BarChart"
import './App.css';
import { csv } from 'd3';
import datacsv from './data.csv';

// const views = d => {
//   d.views = +d.views;
//   return d;
// }

function App() {
  const [data, setData] = useState()
  const [label, setLabel] = useState([])
  const [dataY, setDataY] = useState([])


  useEffect(() => {
    csv(datacsv).then(data => {
      setData(data);
      const graphData = data.filter(data => data.Viewer_Hometown === "Pittsburgh" || data.Viewer_Hometown === "Cleveland")

      const labelsGenre = new Map();
      graphData.forEach(d => {
        labelsGenre[d.Program_Genre] = 0;
      })

      setLabel(Object.keys(labelsGenre))
      graphData.forEach(d => {
        d.Number_of_Viewers = +d.Number_of_Viewers
        labelsGenre[d.Program_Genre] += d.Number_of_Viewers

      })
      setDataY(Object.values(labelsGenre))
      console.log(Object.values(labelsGenre))


    });
  }, []);

  console.log(data)

  return (
    <div className="App">
      <BarChart data={data} label={label} dataY={dataY} />

    </div>
  );
}

export default App;
