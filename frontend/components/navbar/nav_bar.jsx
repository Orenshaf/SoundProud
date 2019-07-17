import React from 'react';
import { NavLink } from 'react-router-dom'
import TrackPlayerContainer from '../track_player/track_player_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionDropdown: false,
            profileDropdown: false,
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.openDropDown = this.openDropDown.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.redirectToProfilePage = this.redirectToProfilePage.bind(this);
    }

    handleLogout() {
        this.props.logout().then(() => this.props.history.push('/logout'))
    }

    openDropDown(dropdown){
        this.setState({[dropdown]: true});
    }

    closeDropDown(){
        if (this.state.sessionDropdown) {
            this.setState({ sessionDropdown: false});
        } else if (this.state.profileDropdown) {
            this.setState({ profileDropdown: false });
        }
    }

    redirectToProfilePage(){
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }
    
    toggleNavBar(){
        const footer = this.props.currentTrack ? <TrackPlayerContainer /> : null;
        const profilePicture = <img className="profile-picture-nav" src={this.props.currentUser.photoUrl} />
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
                            <div className="dropdown">
                                <button className={`profile nav-bar-button notification-button ${this.state.profileDropdown ? "open" : ""}`} onClick={() => this.openDropDown("profileDropdown")}>{profilePicture} <span className="nav-bar-username">{this.props.currentUser.username}</span><img className="caret" src={window.caretIcon} /></button>
                                <div id="myDropdown" className={`dropdown-content ${this.state.profileDropdown ? "show" : ""} dropdown-content-profile`}>
                                    <button className="nav-bar-button logout" id="nav-bar-logout" onClick={this.redirectToProfilePage}>Profile</button>
                                </div>
                            </div>
                            {/* <div className="profile-placeholder"></div> */}
                            <div className="small-button-placeholder"></div>
                            {/* <button className="nav-bar-button notification-button"><img className="notification-img" src={window.notificationIcon} /></button> */}
                            {/* <button className="nav-bar-button notification-button"><img className="notification-img" src={window.mailIcon} /></button> */}
                            <div className="dropdown">
                                <button id="dropDownButton" className={`nav-bar-button notification-button ${this.state.sessionDropdown ? "open" : ""}`} onClick={() => this.openDropDown("sessionDropdown")}><img className="notification-img" src={window.dotsIcon} /></button>
                                <div id="myDropdown" className={`dropdown-content ${this.state.sessionDropdown ? "show" : ""}`}>
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