import React from 'react';

const LogoutPage = ({logout, currentUser}) => {

    if (currentUser) {
        logout();
    }
    
    return (
        <h1 className="signout">You've signed out.</h1>
    )
}

export default LogoutPage;