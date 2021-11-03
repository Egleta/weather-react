import React, { useState, useEffect } from "react";
import "./Time.css";

export default function Time() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let now = new Date();
    
const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <span className="time">
            {months[now.getMonth()]} {now.getDate()}, {days[now.getDay()]}, {now.toLocaleTimeString("sv-SE")}
        </span>
    );
}
