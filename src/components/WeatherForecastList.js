import React, { useContext } from 'react';
import WeatherForecastListItem from './WeatherForecastListItem';
import './WeatherForecastList.css';
import { WeatherForecastContext } from '../context/WeatherForecastContext';

const WeatherForecastList = () => {
    const { loading, weatherForecastList } = useContext(WeatherForecastContext);

    return (
        <div>

            { loading && <h1>Loading data</h1>}

            { weatherForecastList ?
                weatherForecastList.map(weatherForecastListItem => 
                    ( <WeatherForecastListItem weatherForecastListItem={weatherForecastListItem} />)
                ) : null
            }
        </div>
    )
}

export default WeatherForecastList;