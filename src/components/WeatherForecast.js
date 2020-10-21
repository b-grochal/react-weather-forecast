import React, { useContext } from 'react';
import WeatherForecastItem from './WeatherForecastItem';
import './WeatherForecast.css';
import { WeatherForecastContext } from '../context/WeatherForecastContext';

const WeatherForecast = () => {
    const { error, isLoading, weatherForecastList } = useContext(WeatherForecastContext);

    return (
        <div className='weather-forecast-container'>
            { isLoading && <p className='weather-forecast-container__communicate-text'>Lodaing data</p>}

            {!isLoading && error ? (
                <p className='weather-forecast-container__communicate-text'>Lodaing data</p>
            ) : null}

            { weatherForecastList && !isLoading ?
                weatherForecastList.map(weatherForecastListItem =>
                    (<WeatherForecastItem weatherForecastListItem={weatherForecastListItem} />)
                ) : null
            }
        </div>
    )
}

export default WeatherForecast;