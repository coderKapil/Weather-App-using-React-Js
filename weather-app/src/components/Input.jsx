import React from 'react'
import {useWeather} from "../context/Weather"
const Input = () => {
    const weather = useWeather()
    console.log("weather",weather);
  return (
   <input type="text" className='input-field' placeholder='Search Here'  value={weather.searchCity} onChange={(e)=>weather.setSearchCity(e.target.value)} />
  )
}

export default Input
