import React from "react";
import Time from "./Time";
import SearchForm from "./SearchForm";
import Current from "./Current";
import Globe from "./Globe";
import Forecast from "./Forecast";

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
                            <Time />
                        </div>
                    </div>
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
