import React, { useState } from 'react';
import getWeatherForecastForLocation from '../services/openWeatherMapApiService';

export const LocationWeatherForecastContext = React.createContext();

export const LocationWeatherForecastProvider = ({children}) => {
    const [weatherForecastData, setWeatherForecastData] = useState({});
    const [loading, setLoading] = useState(false);

    const getWeatherForecastForLocation = async (apiKey, latitude, longitude) => {
        try{
            setLoading(true);
            const weatherForecastResponse = await getWeatherForecastForLocation(apiKey, latitude, longitude);
            setWeatherForecastData(weatherForecastResponse);
            setLoading(false);
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

