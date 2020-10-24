import React from 'react';
import './WeatherForecastItem.css';

const WeatherForecastItem = ({ weatherForecastListItem }) => {

    return (
        <div className='weather-forecast-item'>
            <span className='weather-forecast-item__info weather-forecast-item__info--date'>{weatherForecastListItem.dt_txt}</span>
            <span className='weather-forecast-item__info weather-forecast-item__info--weather-description'>{weatherForecastListItem.weather[0].description}</span>
            <span className='weather-forecast-item__info weather-forecast-item__info--temperature'>{weatherForecastListItem.main.temp} &#8451;</span>
            <span className='weather-forecast-item__info weather-forecast-item__info--pressure'>{weatherForecastListItem.main.pressure} hPa</span>
        </div>
    )
}

export default WeatherForecastItem;