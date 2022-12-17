import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [temperature, setTemperature] = useState(props.celsius);
  const [unit, setUnit] = useState("celsius");

  function fahrenheit(event) {
    event.preventDefault();

    let fahrenheitTemperature = Math.round(props.celsius * (9 / 5) + 32);
    setUnit("imperial");
    setTemperature(fahrenheitTemperature);
  }

  function celsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setTemperature(props.celsius);
  }

  return (
    <div className="temperature">
      <strong>
        {temperature} ({unit})
      </strong>
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
