import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const AuthPage = () => {
    const {user, isLoading} = useAuth0()

    if (isLoading) return <div>Loading...</div>

    return (
        <h1>Welcome, {user.nickname}</h1>
    ) 
}