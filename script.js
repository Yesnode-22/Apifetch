const city ='ho'
https: //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const key = 'c053f65911c7447c27280ff64477a212'

const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
let temperature = document.getElementById("temp")
let real = document.getElementById("real")
let weather = document.getElementById("weather")
let windSpeed = document.getElementById("wind")
let humidity = document.getElementById("humidity")
let rain = document.getElementById("rain")
let pressure = document.getElementById("pressure")
const d = Date("2022-07-21")
document.getElementById("date").innerHTML = d
fetch(weatherAPI)
  .then(response => response.json())
  .then(data =>{ console.log(data)
    temperature.innerHTML = Math.round(data.main.temp)
    real.innerHTML = Math.round(data.main.feels_like)

    weather.innerHTML = data.weather[0].main
    windSpeed.innerHTML = data.wind.speed
    humidity.innerHTML = data.main.humidity
    rain.innerHTML = data.rain["1h"]
    pressure.innerHTML = data.main.pressure
    });