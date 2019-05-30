import React from 'react';
import SplashContainer from './splash_container';
import HomePageContainer from './home_page_container';
import Modal from './modal';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar_container'
import NoNav from './no_nav'

const App = () => (
    <>
        <Switch>
            <Route exact path='/' component={NoNav} />
            <Route path='/' component={NavBarContainer} />
        </Switch>
        <div className="app">
            <Modal />
            <Switch>
                <Route path="/discover" component={HomePageContainer} />
                <Route path="/" component={SplashContainer} />
            </Switch>
        </div>
    </>
);

export default App;