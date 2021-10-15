import "./styles.css";
import React from "react";
import SearchForm from "./SearchForm";

export default function App() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row mb-2">
                        <div className="col-7">
                            <h4 className="card-title">Your Local Weather Forecast</h4>
                        </div>
                        <div className="col ms-5">
                            <span id="time"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <SearchForm />
                            <h5 className="card-subtitle mb-0 mt-2">
                                Currently in
                                <strong id="city">–</strong>:
                            </h5>
                            <div className="row mb-5">
                                <div className="col me-3">
                                    <div className="row align-items-center">
                                        <div className="col-4 p-0">
                                            <img alt="Weather conditions" id="bigIcon" />
                                        </div>
                                        <div className="col-6 ps-0">
                                            <span id="currentTemperatureBig">–</span>
                                            <span id="CF">
                                                <button id="currentC" className="selected">
                                                    °C
                                                </button>
                                                |<button id="currentF">°F</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mainWeatherInfo">
                                        <div>
                                            <span id="weatherConditionsCurrently"></span>,<span id="dayOrNight"></span>
                                        </div>
                                        <div>
                                            Humidity: <span id="humidityCurrently">–</span> %
                                        </div>
                                        <div>
                                            Wind: <span id="windCurrently">–</span> m/s
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="globeContainer">
                                <img id="globe" src="../media/globesquare.gif" alt="spinning globe" />
                                <div className="middleLayer">
                                    <p className="globeText">Get your location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="forecast"></div>
                </div>
            </div>
            <p id="openSourceLine">
                <a
                    href="https://github.com/Egleta/weather-react"
                    id="openSourceLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open-source code
                </a>{" "}
                by Egle Taraskeviciute
            </p>
        </div>
    );
}
