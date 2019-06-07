import React from 'react';

class LogoutPage extends React.Component {
    
    componentDidMount() {
        if (this.props.currentUser) {
            this.props.logout()
        }
    }

    render(){
        return (
            <h1 className="signout">You've signed out.</h1>
        )
    }
}

export default LogoutPage;