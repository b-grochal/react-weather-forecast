import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ForecastForCityPage from '../pages/CityForecastPage';
import ForecastForLocationPage from '../pages/LocationForecastPage';
import AboutPage from '../pages/AboutPage';

const Main = () => {

    return (
        <main>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/city-forecast' component={ForecastForCityPage} />
                <Route path='/location-forecast'  component={ForecastForLocationPage}/>
                <Route path='/about'  component={AboutPage}/>
            </Switch>
        </main>
    )
};

export default Main;