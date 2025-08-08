import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const AuthPage = () => {
    const {user, isLoading} = useAuth0()

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="flex justify-left">
            <div className="p-4 font-mono text-2xl">
               <h1>Welcome, {user.nickname}</h1>
               <img src={user.picture}></img>
            </div>

        </div>
        
    ) 
}