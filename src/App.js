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
  // const [genre, setGenre] = useState()

  useEffect(() => {
    csv(datacsv).then(data => {
      setData(data);
      const graphData = data.filter(data => data.Viewer_Hometown === "Pittsburgh" || data.Viewer_Hometown === "Cleveland")

      const labelsGenre = new Set();
      data.forEach(d => {
        labelsGenre.add(d.Program_Genre)
      })
      setLabel(Array.from(labelsGenre))
      data.forEach(d => {
        d.Number_of_Viewers = +d.Number_of_Viewers

      })
    });
  }, []);

  console.log(data)

  return (
    <div className="App">
      <BarChart data={data} label={label} />

    </div>
  );
}

export default App;
