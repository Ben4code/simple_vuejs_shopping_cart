import axios from 'axios'

export const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=23e211b4196018c58ab7f92b7dba647e`

export const getWeather = async() => { 
 const weather = await axios.get(baseUrl).then(data => data)
 return weather;
}

