import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Globe from "./Globe";
import Forecast from "./Forecast";

export default function Weather() {
    const apiKey = "a85784d2dae7d5a007ca536ecd5baadb";

    let [currentWeatherData, setCurrentWeatherData] = useState("");
    //let [forecast, setForecast] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const city = event.target.city.value;
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleResponse(response) {
        setCurrentWeatherData({
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
            dayOrNight: stateOfTheDay(response.data.weather[0].icon),
        });

        function stateOfTheDay(iconName) {
            if (iconName.slice(iconName.length - 1) === "n") {
                return "Night";
            }
            return "Day";
        }
    }

    return (
        <div className="Weather">
            <div className="row">
                <div className="col">
                    <div className="SearchForm">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-9">
                                    <div className="mb-3">
                                        <input
                                            type="search"
                                            name="city"
                                            className="form-control"
                                            placeholder="Enter your city"
                                        />
                                    </div>
                                </div>

                                <div className="col-2">
                                    <button type="submit" className="btn btn-secondary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Current weather={currentWeatherData} />
                </div>
                <div className="col pt-4">
                    <Globe />
                </div>
            </div>
            <div className="row">
                <Forecast />
            </div>
        </div>
    );
}
