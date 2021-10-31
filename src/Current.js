import React from "react";

export default function Current(props) {
    return (
        <div className="Current">
            <h5 className="card-subtitle mb-0 mt-2">
                Currently in
                <strong id="city"> {props.weather.city}</strong>:
            </h5>
            <div className="row mb-5">
                <div className="col me-3">
                    <div className="row align-items-center">
                        <div className="col-4 p-0">
                            <img alt="Weather conditions" id="bigIcon" src={props.weather.icon} />
                        </div>
                        <div className="col-6 ps-0">
                            <span id="currentTemperatureBig">{Math.round(props.weather.temperature)}</span>
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
                            <span id="weatherConditionsCurrently">{props.weather.description}</span>,{" "}
                            {props.weather.dayOrNight}
                        </div>
                        <div>Humidity: {props.weather.humidity} %</div>
                        <div>Wind: {Math.round(props.weather.wind)} m/s</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
