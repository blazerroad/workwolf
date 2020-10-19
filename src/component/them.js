import React from "react"
import '../App.css';

export const Them = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={require("../assets/wwlogo.png")} className="App-logo" alt="logo" />
                <p>
                    {props.children}
                 
                </p>
               
            </header>
        </div>
    )
}