import React from 'react';
import LocationForm from '../components/LocationForm';
import WeatherForecast from '../components/WeatherForecast';
import { WeatherForecastProvider } from '../context/WeatherForecastContext';

const ForecastForLocationPage = () => {
    return (
        <WeatherForecastProvider>
            <LocationForm />
            <WeatherForecast />
        </WeatherForecastProvider>
    )
};

export default ForecastForLocationPage;