import React from "react";
import "./weatherDisplay.css";

function WeatherDisplay(props) {
  function getBackgroundColor(temp) {
    if (temp < 0) return "lightblue"; // very cold
    if (temp >= 0 && temp < 10) return "blue";
    if (temp >= 10 && temp < 20) return "green";
    if (temp >= 20 && temp < 30) return "yellow";
    if (temp >= 30) return "red"; // very hot
  }

  const backgroundColor = props.weatherData
    ? getBackgroundColor(props.weatherData.main.temp)
    : "transparent";

  return (
    <div className="weather-card" style={{ backgroundColor: backgroundColor }}>
      {props.weatherData && (
        <>
          <h2>{props.weatherData.name}</h2>
          <p>{props.weatherData.weather[0].description}</p>
          <p className="temperature">
            Temperature: {props.weatherData.main.temp}°C
          </p>
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;
