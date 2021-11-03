import React, { useState } from "react";

export default function TemperatureConversion(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="col-6 ps-0">
                <span id="currentTemperatureBig">{Math.round(props.temperature)}</span>
                <span id="CF">
                    <button id="currentC" className="selected">
                        °C
                    </button>
                    |
                    <button id="currentF" onClick={showFahrenheit}>
                        °F
                    </button>
                </span>
            </div>
        );
    } else {
        let fahrenheit = (props.temperature * 9) / 5 + 32;
        return (
            <div className="col-6 ps-0">
                <span id="currentTemperatureBig">{Math.round(fahrenheit)}</span>
                <span id="CF">
                    <button id="currentC" onClick={showCelsius}>
                        °C
                    </button>
                    |
                    <button id="currentF" className="selected">
                        °F
                    </button>
                </span>
            </div>
        );
    }
}
