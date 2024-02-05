import React, { useEffect, useState } from 'react';
import "./App.css"
const api={
  key: "b336b634a9fec28c298cb88e1928974a",
  base: "https://api.openweathermap.org/data/2.5/",
}
function App() {
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState({})
  function searchpressed(){
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      setWeather(result);
    });
  }
  return (
    <div className='App'>
     <h1>WEATHER APP</h1>
     <input 
        type="text" 
        placeholder="Enter country name"
        onChange={(e)=>setSearch(e.target.value)}/>
     <button onClick={searchpressed}>Search</button>
     {typeof weather.name!=="undefined"?(
     <div>
     <p>Country Name:  {weather.name}</p>


     <p>Temparature:   {weather.main.temp}°C</p>

     <p>Wind Speed:    {weather.wind.speed}</p>
     <p>Humidity:      {weather.main.humidity}</p>
     </div>
     ) : (
      ""
      )}
    </div>
  );
}

export default App;
