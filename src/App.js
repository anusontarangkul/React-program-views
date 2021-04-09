import React, { useState, useEffect } from 'react';
import BarChart from "./components/BarChart"
import './App.css';
import { csv } from 'd3';
import datacsv from './data.csv';

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    csv(datacsv).then(data => {
      setData(data);

    });
  }, []);
  console.log(data)
  return (
    <div className="App">
      <BarChart />

    </div>
  );
}

export default App;
