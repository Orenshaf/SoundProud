import React from 'react';

const LogoutPage = ({currentUser, logout}) => {
    if (currentUser) {
        logout()
    }

    return (
        <h1 className="signout">You've signed out.</h1>
    )
}

export default LogoutPage;