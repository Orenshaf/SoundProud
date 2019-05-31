import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout()
        this.props.history.push('/')
    }
    
    render() {
        let navBar
        if (this.props.currentUser) {
            navBar = (
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
                        <button className="nav-bar-button notification-button"><img className="notification-img" src={window.dotsIcon} /></button>
                        <button className="nav-bar-button logout" onClick={this.handleLogout}>Log Out</button>
                    </div>
                </div>
            )
        } else {
            navBar = null;
        }
        return (
            <>
                {navBar}
            </>
        )
        
    }
}

export default NavBar;