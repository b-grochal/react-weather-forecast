import React, { useContext } from 'react';
import WeatherForecastListItem from './WeatherForecastListItem';
import './WeatherForecastList.css';
import { WeatherForecastContext } from '../context/WeatherForecastContext';

const WeatherForecastList = () => {
    const { error, isLoading, weatherForecastList } = useContext(WeatherForecastContext);

    return (
        <div>

            { isLoading && <h1>Loading data</h1>}

            {!isLoading && error ? (
                <h2>Oh no. Something went wrong.</h2>
            ) : null}

            { weatherForecastList ?
                weatherForecastList.map(weatherForecastListItem =>
                    (<WeatherForecastListItem weatherForecastListItem={weatherForecastListItem} />)
                ) : null
            }
        </div>
    )
}

export default WeatherForecastList;