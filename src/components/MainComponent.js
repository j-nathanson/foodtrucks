import React, { Component, useState } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import CateringPage from './pages/CateringPageComponent';
import TrucksPage from './pages/TrucksPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import FOOD_TRUCKS from '../shared/foodTrucks';
import TEXT_OBJECTS from '../shared/textObjects';
import CAROUSEL_ITEMS from '../shared/carousel';
import CATERING from "../shared/catering";

function Main() {

    const [foodTrucks, addFoodTrucks] = useState(FOOD_TRUCKS);
    const [textObjects, addTextObjects] = useState(TEXT_OBJECTS);
    const [carouselItems, addCarouselItems] = useState(CAROUSEL_ITEMS);
    const [catering, addCatering] = useState(CATERING);


    return (
        <div>
            <Navigation />
            <ScrollToTop />
            <Switch>
                <Route path='/home' render={() => <HomePage foodTrucks={foodTrucks} textObjects={textObjects} />} />
                <Route path='/catering' render={() => <CateringPage carouselItems={carouselItems} textObjects={textObjects} catering={catering} />} />
                <Route path='/ourtrucks' render={() => <TrucksPage foodTrucks={foodTrucks} textObjects={textObjects} />} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    )

}

export default Main;