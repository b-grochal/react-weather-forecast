import React from 'react';
import CityForm from '../components/CityForm';
import WeatherForecast from '../components/WeatherForecast';
import { WeatherForecastProvider } from '../context/WeatherForecastContext';

const ForecastForCityPage = () => {
    return (
        <WeatherForecastProvider>
            <CityForm />
            <WeatherForecast />
        </WeatherForecastProvider>
    )
};

export default ForecastForCityPage;