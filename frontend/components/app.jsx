import React from 'react';
import SplashContainer from './splash_container';
import HomePageContainer from './home_page_container';
import Modal from './modal';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <Modal />
        <Switch>
            <Route path="/discover" component={HomePageContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;