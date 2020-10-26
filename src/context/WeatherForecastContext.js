import React, { useState } from 'react';
import axios from 'axios';
import { getLocationWeatherForecastFromWebApi, getCityWeatherForecastFromWebApi } from '../api/openWeatherMapApi';

export const WeatherForecastContext = React.createContext();

export const WeatherForecastProvider = ({children}) => {
    const [weatherForecastList, setWeatherForecastList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getWeatherForecastForLocation = async (latitude, longitude) => {
        try {
            setError(false);
            setIsLoading(true);
            const forecast = await getLocationWeatherForecastFromWebApi(latitude, longitude);
            setWeatherForecastList(forecast);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setWeatherForecastList([]);
            setError(true);
            setIsLoading(false);
        }
        
    }

    const getWeatherForecastForCity = async (cityName) => {
        try { 
            debugger;
            setError(false);
            setIsLoading(true);
            const forecast = await getCityWeatherForecastFromWebApi(cityName);
            setWeatherForecastList(forecast);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setWeatherForecastList([]);
            setError(true);
            setIsLoading(false);
        }
        
    }

    return (
        <WeatherForecastContext.Provider value={{
            error,
            isLoading,
            weatherForecastList,
            getWeatherForecastForLocation,
            getWeatherForecastForCity
        }}>
            {children}
        </WeatherForecastContext.Provider>
    )
}

