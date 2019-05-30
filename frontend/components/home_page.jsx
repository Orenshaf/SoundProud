import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout()
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <button className="logout" onClick={this.handleLogout}>Log Out</button>
            </div>
        )
    }
}
export default HomePage;