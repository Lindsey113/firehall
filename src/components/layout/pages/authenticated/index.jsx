import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const AuthPage = () => {
    const { user, isLoading } = useAuth0()

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="flex justify-left">
            <div className="p-4 font-mono text-2xl">
                <h1 className="mb-4">Welcome, {user.nickname}</h1>
                <div className="flex border">
                    <img src={user.picture} className="m-3"></img>
                </div>
                <div className="flex flex-col border p-5 gap-2">
                    <text className="">Records:</text>
                    <text>Notes:</text>
                    <text>Documents:</text>
                </div>
            </div>
        </div>
    )
}