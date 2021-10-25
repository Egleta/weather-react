import React from "react";

export default function Current() {
    return (
        <div>
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
    );
}
