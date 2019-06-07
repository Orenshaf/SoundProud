import React from 'react';
import SplashContainer from '../components/splash/splash_container';
import HomePageContainer from '../components/home_page/home_page_container';
import LogoutPageContainer from '../components/logout_page/logout_page_container';
import UploadPageContainer from '../components/upload_page/upload_page_container';
import TrackShowPageContainer from '../components/tracks/track_show_page_container';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, PermitRoute } from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container'
import NoNav from './navbar/no_nav'

const App = () => (
    <>
        <Switch>
            <Route exact path='/' component={NoNav} />
            <Route path='/' component={NavBarContainer} />
        </Switch>
        <div className="app">
            <Modal />
            <Switch>
                <Route path="/logout" component={LogoutPageContainer} />
                <Route path="/upload" component={UploadPageContainer} />
                <Route path="/discover" component={HomePageContainer} />
                <Route path="/:trackId" component={TrackShowPageContainer} />
                <PermitRoute path="/" component={SplashContainer} />
            </Switch>
        </div>
    </>
);

export default App;