import React, { Component }
    from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './pages/HomePageComponent';
import CateringPage from './pages/CateringPageComponent';
import TrucksPage from './pages/TrucksPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navigation />
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
}

export default Main;