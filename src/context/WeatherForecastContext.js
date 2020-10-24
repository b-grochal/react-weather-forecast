import React, { useState } from 'react';
import axios from 'axios';

export const WeatherForecastContext = React.createContext();

export const WeatherForecastProvider = ({children}) => {
    const [weatherForecastList, setWeatherForecastList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getWeatherForecastForLocation = async (apiKey, latitude, longitude) => {
        try{
            setIsLoading(true);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
            setWeatherForecastList(response.data.list);
            setIsLoading(false);
            console.log(response);
        } catch (e) {
            console.log(e);
            setError(true);
            setIsLoading(false);
        }
        
    }

    const getWeatherForecastForCity = async (apiKey, cityName) => {
        try{
            setIsLoading(true);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`);
            setWeatherForecastList(response.data.list);
            setIsLoading(false);
            console.log(response);
        } catch (e) {
            console.log(e);
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

