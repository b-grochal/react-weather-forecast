import axios from 'axios';

export const getLocationWeatherForecastFromWebApi = async (latitude, longitude) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`);
    return response.data.list;
}

export const getCityWeatherForecastFromWebApi = async (cityName) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`);
    return response.data.list;
}