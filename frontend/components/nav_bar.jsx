import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.openDropDown = this.openDropDown.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
    }

    handleLogout() {
        this.props.logout()
        this.props.history.push('/')
    }

    openDropDown(){
        // debugger
        document.getElementById("dropDownButton").classList.toggle("open");
        document.getElementById("myDropdown").classList.toggle("show");
    }

    toggleNavBar(){
        if (this.props.currentUser) {
            return (
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        <button className="nav-bar-button nav-bar-img-button"><img className="nav-bar-img" src={window.soundCloudIcon} /></button>
                        <button className="nav-bar-button nav-button home">Home</button>
                        <button className="nav-bar-button nav-button stream">Stream</button>
                        <button className="nav-bar-button nav-button stream">Library</button>
                        <input className="login-info-input demo-login modal-item search-bar" type="text" placeholder="Search" />
                        <button className="nav-bar-button" id="profile">{this.props.currentUser.username}<img className="caret" src={window.caretIcon} /></button>
                        <button className="nav-bar-button notification-button"><img className="notification-img" src={window.notificationIcon} /></button>
                        <button className="nav-bar-button notification-button"><img className="notification-img" src={window.mailIcon} /></button>
                        <div className="dropdown">
                            <button id="dropDownButton" className="nav-bar-button notification-button" onClick={this.openDropDown}><img className="notification-img" src={window.dotsIcon} /></button>
                            <div id="myDropdown" className="dropdown-content">
                                <button className="nav-bar-button logout" onClick={this.handleLogout}>Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        <button className="nav-bar-button nav-logo"><span className="header-name header-logo"><img src={window.soundCloudIcon} />SOUNDPROUD</span></button>
                        <button className="nav-bar-button nav-button home">Home</button>
                        <button className="nav-bar-button nav-button stream">Stream</button>
                        <button className="nav-bar-button nav-button stream">Library</button>
                        <input className="login-info-input demo-login modal-item search-bar-logged-out" type="text" placeholder="Search" />
                        <div className="signed-out-navbar">
                            <button onClick={() => this.props.openModal('loginInfo')} className="splash-button sign-in">Sign in</button>
                            <button onClick={() => this.props.openModal('loginInfo')} className="splash-button create-account">Create account</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    render() {
        return this.toggleNavBar()
    }
}

export default NavBar;