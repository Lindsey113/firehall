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
        <button className='font-bold font-mono text-[#1f1d1d] bg-[#ff8922] hover:text-[#1f1d1d] hover:border-[#E2F0F7] border-transparent border-1 py-3 px-4 rounded-xl' onClick={handleLogging}>
            {buttonText}
        </button>
    )
}