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
                
            </div>
        )
    }
}
export default HomePage;