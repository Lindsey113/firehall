import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    const handleLogging = () => {
        if (isAuthenticated) {
            logout({ returnTo: window.location.main }) //eslint-disable-line
        } else {
            loginWithRedirect({appState: {returnTo: '/authenticated'}})
        }
    }

    const buttonText = isAuthenticated ? 'Logout' : 'Login'

    return (
        <button className='logging-btn' onClick={handleLogging}>
            {buttonText}
        </button>
    )
}