import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state =({
            page: props.history.location.pathname.split('/')[1],
        })
        this.handleLogout = this.handleLogout.bind(this);
        this.openDropDown = this.openDropDown.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
    }
    
    componentDidMount() {
        debugger
        if (this.props.currentUser) {
            this.setState({ page: this.props.history.location.pathname.split('/')[1] })
        }
    }

    componentDidUpdate() {
        debugger;
        let elements = document.getElementsByClassName('selected');
        if (elements.length > 0) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('selected');
            }
        }
        
        if (this.props.history.location.pathname !== '/logout'){
            document.getElementById(this.props.history.location.pathname.split('/')[1]).classList.toggle("selected");
        }
    }

    handleLogout() {
        this.props.logout()
        this.props.history.push('/logout')
    }

    openDropDown(){
        document.getElementById("dropDownButton").classList.toggle("open");
        document.getElementById("myDropdown").classList.toggle("show");
    }

    toggleNavBar(){
        if (this.props.currentUser) {
            return (
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        <button className="nav-bar-button nav-bar-img-button" onClick={() => this.props.history.push('/discover')}><img className="nav-bar-img" src={window.soundCloudIcon} /></button>
                        <button id="discover" className="nav-bar-button nav-button home" onClick={() => this.props.history.push('/discover')}>Home</button>
                        <button id="stream" className="nav-bar-button nav-button stream">Stream</button>
                        <button id="library" className="nav-bar-button nav-button stream">Library</button>
                        <input className="login-info-input demo-login modal-item search-bar" type="text" placeholder="Search" />
                        <button id="upload" className="nav-bar-button nav-button" onClick={() => this.props.history.push('upload')}>Upload</button>
                        <button className="nav-bar-button" id="profile">{this.props.currentUser.username}<img className="caret" src={window.caretIcon} /></button>
                        <button className="nav-bar-button notification-button"><img className="notification-img" src={window.notificationIcon} /></button>
                        <button className="nav-bar-button notification-button"><img className="notification-img" src={window.mailIcon} /></button>
                        <div className="dropdown">
                            <button id="dropDownButton" className="nav-bar-button notification-button" onClick={this.openDropDown}><img className="notification-img" src={window.dotsIcon} /></button>
                            <div id="myDropdown" className="dropdown-content">
                                <button className="nav-bar-button logout" id="nav-bar-logout" onClick={this.handleLogout}>Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        <button id="nav-logo" className="nav-bar-button" onClick={() => this.props.history.push('/')}><span className="header-name header-logo"><img src={window.soundCloudIcon} /><span id="soundproud">SOUNDPROUD</span></span></button>
                        <button id="discover" className="nav-bar-button nav-button home" onClick={() => this.props.history.push('/discover')}>Home</button>
                        <button className="nav-bar-button nav-button stream">Stream</button>
                        <button className="nav-bar-button nav-button stream">Library</button>
                        <input className="login-info-input demo-login modal-item search-bar-logged-out" type="text" placeholder="Search for artists, bands, tracks, podcasts" />
                        <div className="signed-out-navbar">
                            <button id="logged-out-signin"onClick={() => this.props.openModal('loginInfo')} className="splash-button sign-in">Sign in</button>
                            <button id="logged-out-create-account"onClick={() => this.props.openModal('loginInfo')} className="splash-button create-account">Create account</button>
                            <button className="splash-button welcome">Welcome</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    render() {
        // debugger
        return this.toggleNavBar()
    }
}

export default NavBar;