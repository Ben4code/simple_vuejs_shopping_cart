import axios from 'axios'

const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=23e211b4196018c58ab7f92b7dba647e`

export const getWeather = async () => { 
  return axios.get(url)
    .then(res => res.data)
    // .then(data => da.data)
    
    .catch(err => console.log(err))
}


