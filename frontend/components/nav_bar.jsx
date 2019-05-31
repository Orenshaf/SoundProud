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

        return (
            <div className="nav-bar-container">
                <div className="nav-bar">
                    <img src={window.soundCloudIcon} />
                    <button className="nav-button">Home</button>
                    <button className="nav-button">Stream</button>
                    <button className="nav-button">Library</button>
                    <button className="logout" onClick={this.handleLogout}>Log Out</button>
                </div>
            </div>
        )
        
    }
}

export default NavBar;