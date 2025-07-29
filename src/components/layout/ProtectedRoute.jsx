import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({children}) => {
    const {isAuthenticated, isLoading} = useAuth0()

    if(isLoading) {
        return <div>LOADING...</div>
    }
    return isAuthenticated ? children : <Navigate to="/" />
}