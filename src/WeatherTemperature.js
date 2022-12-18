import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let temperature = props.celsius;
  let [unit, setUnit] = useState("celsius");

  function fahrenheit(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }

  function celsius(event) {
    event.preventDefault();

    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <strong>{Math.round(temperature)}</strong>
        <span className="units">
          <a href="/" onClick={celsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={fahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <strong>{Math.round((temperature * 9) / 5 + 32)}</strong>
        <span className="units">
          <a href="/" onClick={celsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={fahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
