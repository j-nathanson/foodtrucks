import React, { Component } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import CateringPage from './pages/CateringPageComponent';
import TrucksPage from './pages/TrucksPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import FOOD_TRUCKS from '../shared/foodTrucks';
import TEXT_OBJECTS from '../shared/textObjects';

// state data passed through Main
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodTrucks: FOOD_TRUCKS,
            textObjects: TEXT_OBJECTS,
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <ScrollToTop />
                <Switch>
                    <Route path='/home' render={() => <HomePage foodTrucks={this.state.foodTrucks} textObjects={this.state.textObjects} />} />
                    <Route path='/catering' component={CateringPage} />
                    <Route path='/ourtrucks' render={() => <TrucksPage foodTrucks={this.state.foodTrucks} textObjects={this.state.textObjects} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;