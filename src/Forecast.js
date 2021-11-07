import React from "react";

export default function Forecast(props) {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="Forecast row">
            {props.forecast.map(function (forecastDay) {
                const weekdayDate = new Date(forecastDay.dt * 1000);

                return (
                    <div class="col me-3">
                        <div class="row align-items-center">
                            <div class="col-6 pe-0">
                                <span class="smallTextsBottom">
                                    <strong>{weekdays[weekdayDate.getDay()]}</strong>
                                    <span class="smallTemperaturesBottom smallC">
                                        {" "}
                                        {Math.round(forecastDay.temp.day)}°C
                                    </span>
                                </span>
                            </div>
                            <div class="col-6 ps-0">
                                <img
                                    class="smallIconsForecast"
                                    src={`http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`}
                                    alt="Weather conditions"
                                />
                            </div>
                        </div>
                        <div class="row smallConditions">
                            <span>Humidity: {forecastDay.humidity} %</span>
                            <span>Wind: {Math.round(forecastDay.wind_speed)} m/s</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
