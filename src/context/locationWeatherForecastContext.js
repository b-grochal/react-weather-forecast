import React, { useState } from 'react';
import axios from 'axios';
import getWeatherForecastForLocation from '../services/openWeatherMapApiService';

export const LocationWeatherForecastContext = React.createContext();

export const LocationWeatherForecastProvider = ({children}) => {
    const [weatherForecastData, setWeatherForecastData] = useState({});
    const [loading, setLoading] = useState(false);

    const getWeatherForecastForLocation = async (apiKey, latitude, longitude) => {
        try{
            setLoading(true);
            const weatherForecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
            setWeatherForecastData(weatherForecastResponse);
            setLoading(false);
            console.log(weatherForecastResponse);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
        
    }

    return (
        <LocationWeatherForecastContext.Provider value={{
            loading,
            weatherForecastData,
            getWeatherForecastForLocation
        }}>
            {children}
        </LocationWeatherForecastContext.Provider>
    )
}

