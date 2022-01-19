import React from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import CateringPage from './pages/CateringPageComponent';
import TrucksPage from './pages/TrucksPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// state data passed through Main
function Main() {

    return (
        <div>
            <Navigation />
            <ScrollToTop />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/catering' component={CateringPage} />
                <Route path='/ourtrucks' component={TrucksPage} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;