import React, { useState, useEffect } from 'react';
import BarChart from "./components/BarChart"
import { csv } from 'd3';
import datacsv from './data.csv';



function App() {
  const [data, setData] = useState()
  const [label, setLabel] = useState([])
  const [dataY, setDataY] = useState([])
  const [city, setCity] = useState([])




  useEffect(() => {
    //Get data from csv
    csv(datacsv).then(data => {
      setData(data);

      // Add city for x axis
      const eachCity = new Set();
      data.forEach(c => {
        eachCity.add(c.Viewer_Hometown)
      })
      setCity(Array.from(eachCity))


      // Filter data for where hometown is Pittsburgh or Cleveland
      // (can be adjusted for different cities)
      const graphData = data.filter(data => data.Viewer_Hometown === "Pittsburgh" || data.Viewer_Hometown === "Cleveland")


      //Create map to keep track of views for each city
      // (can be adjusted for average)
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



    });
  }, []);





  return (
    <div className="App">
      <BarChart data={data} label={label} dataY={dataY} />


    </div>
  );
}

export default App;
