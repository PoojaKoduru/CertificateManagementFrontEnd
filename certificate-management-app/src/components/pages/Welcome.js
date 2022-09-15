import React from 'react';
import { Redirect } from 'react-router-dom';
export function Welcome(){
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        console.log("login first")
        return <Redirect to="/login" />;
      }
    
    return(
        <div>
            <h2>Welcome to the Certificate management Tool!</h2>
        </div>
        

    )
}