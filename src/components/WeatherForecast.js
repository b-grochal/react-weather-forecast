import React, { useContext } from 'react';
import WeatherForecastItem from './WeatherForecastItem';
import './WeatherForecast.css';
import { WeatherForecastContext } from '../context/WeatherForecastContext';
import LoadingSpinner from './LoadingSpinner';

const WeatherForecast = () => {
    const { error, isLoading, weatherForecastList } = useContext(WeatherForecastContext);

    return (
        <div className='weather-forecast-container'>
            { isLoading && <LoadingSpinner />}

            {!isLoading && error ? (
                <p className='weather-forecast-container__communicate-text'>Oopps. Something went wrong. Check if your city name is correct.</p>
            ) : null}

            { weatherForecastList && !isLoading ?
                weatherForecastList.map(weatherForecastListItem =>
                    (<WeatherForecastItem key={weatherForecastListItem.dt_txt} weatherForecastListItem={weatherForecastListItem} />)
                ) : null
            }
        </div>
    )
}

export default WeatherForecast;