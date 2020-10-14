import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ForecastForCityPage from '../../pages/ForecastForCityPage';
import ForecastForLocationPage from '../../pages/ForecastForLocationPage';
import AboutPage from '../../pages/AboutPage';

const Main = () => {

    return (
        <main>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/' component={ForecastForCityPage} />
                <Route path='/'  component={ForecastForLocationPage}/>
                <Route path='/'  component={AboutPage}/>
            </Switch>
        </main>
    )
};

export default Main;