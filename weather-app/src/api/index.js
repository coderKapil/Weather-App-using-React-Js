const base_Url = "https://api.weatherapi.com/v1/current.json?key=941607918f2448739e980514242603"
export const getWeatherDataForCity = async(city)=>{
   const response = await fetch(`${base_Url}&q=${city}&aqi=yes`)
   return await response.json()
}

export const getWeatherDataForLocation = async(lat,lon)=>{
   const response = await fetch(`${base_Url}&q=${lat}, ${lon}&aqi=yes`)
   return await response.json()
}