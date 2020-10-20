import axios from 'axios';

const getWeatherForecastForLocation = (apiKey, latitude, longitude) => {
    return await axios.get(`https//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
}