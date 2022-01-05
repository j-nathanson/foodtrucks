import React, { Component } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import CateringPage from './pages/CateringPageComponent';
import TrucksPage from './pages/TrucksPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import FOODTRUCKS from '../shared/foodtrucks';
import TEXTOBJECTS from '../shared/textobjects';
import CAROUSEL_ITEMS from '../shared/carousel';
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodTrucks: FOODTRUCKS,
            textObjects: TEXTOBJECTS,
            carouselItems: CAROUSEL_ITEMS
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <Switch>

                    <Route path='/home' render={() => <HomePage foodTrucks={this.state.foodTrucks} textObjects={this.state.textObjects} />} />
                    <Route path='/catering' render={() => <CateringPage carouselItems={this.state.carouselItems} textObjects={this.state.textObjects} />} />
                    <Route path='/ourtrucks' component={TrucksPage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;