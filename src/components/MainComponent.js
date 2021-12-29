import React, { Component }
    from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navigation />
                <h1>pages go here</h1>
                <Footer />
            </div>
        )
    }
}

export default Main;