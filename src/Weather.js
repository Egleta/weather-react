import React, {useState} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Current from "./Current";
import Globe from "./Globe";
import Forecast from "./Forecast";

export default function Weather() {
    const apiKey = "a85784d2dae7d5a007ca536ecd5baadb";
    let city = "London";
    let apiURL = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return (
        <div className="Weather">
            <div className="row">
                <div className="col">
                    <SearchForm />
                    <Current />
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
