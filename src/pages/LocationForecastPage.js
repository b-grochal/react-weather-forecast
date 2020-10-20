import React from 'react';
import LocationForm from '../components/LocationForm';
import { LocationWeatherForecastProvider } from '../context/locationWeatherForecastContext';

const ForecastForLocationPage = () => {
    return (
        <LocationWeatherForecastProvider>
            <LocationForm />
        </LocationWeatherForecastProvider>
    )
};

export default ForecastForLocationPage;