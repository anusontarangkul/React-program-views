import React, { useState, useEffect } from 'react';
import BarChart from "./components/BarChart"
import './App.css';
import { csv } from 'd3';
import datacsv from './data.csv';



function App() {
  const [data, setData] = useState()
  const [label, setLabel] = useState([])
  const [dataY, setDataY] = useState([])
  const [city, setCity] = useState([])

  const displayCity = new Set();


  useEffect(() => {
    csv(datacsv).then(data => {
      setData(data);
      const eachCity = new Set();
      data.forEach(c => {
        eachCity.add(c.Viewer_Hometown)
      })
      setCity(Array.from(eachCity))

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



    });
  }, []);


  // const handleOnChange = e => {

  //   const index = e.target.name;
  //   if (displayCity.has(index)) {
  //     displayCity.delete(index)
  //   } else {
  //     displayCity.add(index)
  //   }
  //   const graphData = data.filter(data => data.Viewer_Hometown === index)
  //   const labelsGenre = new Map();
  //   graphData.forEach(d => {
  //     labelsGenre[d.Program_Genre] = 0;
  //   })

  //   setLabel(Object.keys(labelsGenre))
  //   graphData.forEach(d => {
  //     d.Number_of_Viewers = +d.Number_of_Viewers
  //     labelsGenre[d.Program_Genre] += d.Number_of_Viewers

  //   })
  //   setDataY(Object.values(labelsGenre))



  // }


  return (
    <div className="App">
      <BarChart data={data} label={label} dataY={dataY} />
      <form>
        {/* {city.map((city1) => {
          return (
            <label>

              <input type="checkbox" name={city1} onChange={handleOnChange} />
              {city1}
            </label>
          )
        })} */}
      </form>

    </div>
  );
}

export default App;
