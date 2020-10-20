import React from 'react';

const WeatherForecastListItem = ({ weatherForecastListItem }) => {

    return (
        <div>
            {weatherForecastListItem.dt_txt}
            {weatherForecastListItem.main.temp}
            {weatherForecastListItem.main.pressure}
            {weatherForecastListItem.main.humidity}
            {weatherForecastListItem.weather[0].description}
        </div>
    )
}

export default WeatherForecastListItem;