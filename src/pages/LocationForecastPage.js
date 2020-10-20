import React from 'react';
import LocationForm from '../components/LocationForm';
import { WeatherForecastProvider } from '../context/WeatherForecastContext';

const ForecastForLocationPage = () => {
    return (
        <WeatherForecastProvider>
            <LocationForm />
        </WeatherForecastProvider>
    )
};

export default ForecastForLocationPage;