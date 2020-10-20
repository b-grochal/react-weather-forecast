import React from 'react';
import LocationForm from '../components/LocationForm';
import WeatherForecastList from '../components/WeatherForecastList';
import { WeatherForecastProvider } from '../context/WeatherForecastContext';

const ForecastForLocationPage = () => {
    return (
        <WeatherForecastProvider>
            <LocationForm />
            <WeatherForecastList />
        </WeatherForecastProvider>
    )
};

export default ForecastForLocationPage;