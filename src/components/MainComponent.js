import React, { Component } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import CateringPage from './pages/CateringPageComponent';
import TrucksPage from './pages/TrucksPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import FOODTRUCKS from '../shared/foodtrucks';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state ={
            foodtrucks:FOODTRUCKS
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <Switch>
    
                    <Route path ='/home' render={()=> <HomePage foodtrucks ={this.state.foodtrucks}/>}/>
                    <Route path='/catering' component={CateringPage} />
                    <Route path='/ourtrucks' component={TrucksPage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;