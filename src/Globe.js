import React from "react";
import "./Globe.css";

export default function Globe() {
    return (
        <div className="Globe">
            <img className="animation" src="../media/globesquare.gif" alt="spinning globe" />
            <div className="middleLayer">
                <p className="globeText">Get your location</p>
            </div>
        </div>
    );
}
