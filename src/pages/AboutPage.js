import React from 'react';
import Accordion from '../layout/Accordion';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className='about-page-container'>
            <Accordion
                title="What is Weather Forecast?"
                content="Weather Forecast is a web application created with React.js for learning purposes which lets you check 5-day weather forecast for thousands of 
                cities around the world and any location."
            />
            <Accordion
                title="What technologies were used to create Weather Forecast?"
                content="Application was built with React.js framework and additional libraries: React Router for routing and Axios for fetching weather forecast data from Web API. 
                Project is based on funtional components with hooks. Data fethed from Web API is shared among components through React's Context API.
                Whole layout was created with vanilla CSS without any UI library like Bootsrap. " 
            />
            <Accordion 
                title="From where is weather forecast data fetched?"
                content="Wheater forecast data is fetched from OpenWeatherMap API. It lets you check 5-day weather forecast for city or location for free."
            />
            <Accordion 
                title="I cannot get my current location. What's wrong?" 
                content="To get your current location you have to give your browser permission for acessing location. It's required by Geolocation API." 
            />
        </div>
    )
};

export default AboutPage;