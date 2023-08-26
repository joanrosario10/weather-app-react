import React from "react";
import "./WeatherWidget.css";

function WeatherDisplay(props) {
  return (
    <div className="widget">
      <div className="pictoBackdrop"></div>
      <div className="pictoFrame"></div>
      <div className="pictoCloudBig"></div>
      <div className="pictoCloudSmall"></div>
      <div className="pictoCloudFill"></div>

      <div className="details">
        <div className="temperature">
          {props.weatherData && props.weatherData.main.temp}°C
        </div>
        <div className="summary">
          <p className="summaryText">
            {props.weatherData && props.weatherData.weather[0].description}
          </p>
        </div>
        {/* Assuming you'll fetch precipitation and wind details in future */}
        <div className="precipitation">
          Precipitation: {/*precipitation value here */}%
        </div>
        <div className="wind">Wind: {/*wind value here */} km/h</div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
