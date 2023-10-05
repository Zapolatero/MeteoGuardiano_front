import './App.css';
import DataSquare from './components/DataSquare/DataSquare';
import DateDisplay from './components/DateDisplay/DateDisplay';
import QuickMenu from './components/QuickMenu/QuickMenu'
import StatisticsSquare from './components/StatisticsSquare/SatisticsSquare';
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
  const[displayedInfo, setDisplayedInfo] = useState(infos.Live)
 
  useEffect(() => {
    fetchLiveData()
   }, []);

  const fetchLiveData = () => {
    fetch('http://localhost:8080/temperature-humidity/last')
         .then((res) => res.json())
         .then((data) => {
            setTemperature(data.temperature);
            setHumidity(data.humidity);
            setCaptureDate(new Date(data.date))
         })
         .catch((err) => {
            console.log(err.message);
         });
  }
  const showLive = (event) => {
    setDisplayedInfo(infos.Live);
  }
  
  const showStats = (event) => {
    setDisplayedInfo(infos.Stats);
  }

  return (
    <div className="App">      
      <DateDisplay captureDate={captureDate}></DateDisplay>
      <QuickMenu selected={displayedInfo} clickLive={showLive} clickStats={showStats}></QuickMenu>
      {
        displayedInfo === infos.Live ? 
        <div>
          <DataSquare color="#7789E6" title="Temperature" measurement={temperature}></DataSquare>
          <DataSquare color="#FF953A" title="Humidity" measurement={humidity}></DataSquare>
        </div>   
        : 
        <div>
          <StatisticsSquare dataType="temperature"></StatisticsSquare>
        </div>      
      }
      <button onClick={fetchLiveData}>Refresh</button>
    </div>
  );
}
  
export const infos = {
    Live:"live",
    Stats: "stats"
};

export default App