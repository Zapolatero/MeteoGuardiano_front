import logo from './logo.svg';
import './App.css';
import DataSquare from './components/DataSquare/DataSquare';
import DateDisplay from './components/DateDisplay/DateDisplay';
import { useState, useEffect } from 'react';

function App() { 
  var mockTemperature={
    "value": "00",
    "unit": "°C"
  };
  var mockHumidity={
    "value": "00",
    "unit": "%"
  };
  const[temperature, setTemperature] = useState(mockTemperature)
  const[humidity, setHumidity] = useState(mockHumidity) 
  const[captureDate, setCaptureDate] = useState([])
 
  useEffect(() => {
      fetch('http://localhost:8080/temperature-humidity/last')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setTemperature(data.temperature);
            setHumidity(data.humidity);
            setCaptureDate(new Date(data.date))
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div className="App">
      <DateDisplay captureDate={captureDate}></DateDisplay>
      <DataSquare color="#7789E6" title="Temperature" measurement={temperature}></DataSquare>
      <DataSquare color="#FF953A" title="Humidity" measurement={humidity}></DataSquare>
    </div>
  );
}

export default App;
