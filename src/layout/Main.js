import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CityForecastPage from '../pages/CityForecastPage';
import LocationForecastPage from '../pages/LocationForecastPage';
import AboutPage from '../pages/AboutPage';
import './Main.css';

const Main = () => {

    return (
        <main className='main'>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/city-forecast' component={CityForecastPage} />
                <Route path='/location-forecast'  component={LocationForecastPage}/>
                <Route path='/about'  component={AboutPage}/>
            </Switch>
        </main>
    )
};

export default Main;