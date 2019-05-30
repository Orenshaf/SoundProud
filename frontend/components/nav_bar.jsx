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

                <button className="logout" onClick={this.handleLogout}>Log Out</button>

            </div>
        )
        
    }
}

export default NavBar;