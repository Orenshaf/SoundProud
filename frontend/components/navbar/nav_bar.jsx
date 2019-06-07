import React from 'react';
import { NavLink } from 'react-router-dom'
import TrackPlayer from '../tracks/track_player';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state =({
            dropdown: false,
        })

        this.handleLogout = this.handleLogout.bind(this);
        this.openDropDown = this.openDropDown.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    handleLogout() {
        this.props.logout().then(() => this.props.history.push('/logout'))
    }

    openDropDown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    closeDropDown(){
        if (this.state.dropdown) {
            this.setState({dropdown: false});
        }
    }
    
    toggleNavBar(){
        const footer = this.props.currentTrack ? <TrackPlayer author={this.props.currentTrackAuthor} track={this.props.currentTrack}/> : null;
        if (this.props.currentUser && this.props.location.pathname !== '/logout') {
            return (
                <>
                    <div className="nav-bar-container" onClick={this.closeDropDown}>
                        <div className="nav-bar">
        
                            <NavLink to="/discover" className="nav-bar-button nav-bar-img-button logged-out" onClick={this.closeDropDown}><img className="nav-bar-img" src={window.soundCloudIcon} /></NavLink>                        
                            <NavLink to="/discover" className="nav-bar-button nav-button" activeClassName="active" onClick={this.closeDropDown}>Home</NavLink>
                            <div className="button-placeholder"></div>
                            {/* <NavLink to="/stream" className="nav-bar-button nav-button" activeClassName="active" onClick={this.closeDropDown}>Stream</NavLink> */}
                            {/* <NavLink to="/library" className="nav-bar-button nav-button" activeClassName="active" onClick={this.closeDropDown}>Library</NavLink> */}
                            <div className="searchbar-placeholder"></div>
                            {/* <input className="login-info-input demo-login modal-item search-bar" type="text" placeholder="Search" /> */}
                            <NavLink to="/upload" className="nav-bar-button nav-button upload" activeClassName="active" onClick={this.closeDropDown}>Upload</NavLink>
                            {/* <div className="profile-placeholder"></div> */}
                            <button className="nav-bar-button" id="profile">{this.props.currentUser.username}{/* <img className="caret" src={window.caretIcon} /> */}</button>
                            <div className="small-button-placeholder"></div>
                            {/* <button className="nav-bar-button notification-button"><img className="notification-img" src={window.notificationIcon} /></button> */}
                            {/* <button className="nav-bar-button notification-button"><img className="notification-img" src={window.mailIcon} /></button> */}
                            <div className="dropdown">
                                <button id="dropDownButton" className={`nav-bar-button notification-button ${this.state.dropdown ? "open" : ""}`} onClick={this.openDropDown}><img className="notification-img" src={window.dotsIcon} /></button>
                                <div id="myDropdown" className={`dropdown-content ${this.state.dropdown ? "show" : ""}`}>
                                    <button className="nav-bar-button logout" id="nav-bar-logout" onClick={this.handleLogout}>Sign out</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {footer}
                </>
            )
        } else {
            return (
                <>
                    <div className="nav-bar-container">
                        <div className="nav-bar">
                            <button id="nav-logo" className="nav-bar-button logged-out" onClick={() => this.props.history.push('/')}><span className="header-name header-logo"><img src={window.soundCloudIcon} /><span id="soundproud">SOUNDPROUD</span></span></button>
                            <NavLink to="/discover" className="nav-bar-button nav-button" activeClassName="active" onClick={this.closeDropDown}>Home</NavLink>
                            <div className="button-placeholder"></div>
                            {/* <NavLink to="/stream" className="nav-bar-button nav-button" activeClassName="active" onClick={this.closeDropDown}>Stream</NavLink>                         */}
                            {/* <NavLink to="/library" className="nav-bar-button nav-button" activeClassName="active" onClick={this.closeDropDown}>Library</NavLink>                         */}
                            <div className="logged-out-searchbar-placeholder"></div>
                            {/* <input className="login-info-input demo-login modal-item search-bar-logged-out" type="text" placeholder="Search for artists, bands, tracks, podcasts" /> */}
                            <div className="signed-out-navbar">
                                <button id="logged-out-signin"onClick={() => this.props.openModal('loginInfo')} className="splash-button sign-in">Sign in</button>
                                <button id="logged-out-create-account"onClick={() => this.props.openModal('loginInfo')} className="splash-button create-account">Create account</button>
                            </div>
                        </div>
                    </div>

                    {footer}
                </>
            )
        }
    }
    
    render() {
        return this.toggleNavBar()
    }
}

export default NavBar;