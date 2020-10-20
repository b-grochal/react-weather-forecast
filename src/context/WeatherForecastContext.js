import React, { useState } from 'react';
import axios from 'axios';

export const WeatherForecastContext = React.createContext();

export const WeatherForecastProvider = ({children}) => {
    const [weatherForecastData, setWeatherForecastData] = useState({});
    const [loading, setLoading] = useState(false);

    const getWeatherForecastForLocation = async (apiKey, latitude, longitude) => {
        try{
            setLoading(true);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
            setWeatherForecastData(response.data);
            setLoading(false);
            console.log(response);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
        
    }

    return (
        <WeatherForecastContext.Provider value={{
            loading,
            weatherForecastData,
            getWeatherForecastForLocation
        }}>
            {children}
        </WeatherForecastContext.Provider>
    )
}

