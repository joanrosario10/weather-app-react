import React from "react";
import CityItem from "./CityItem";
import "./CityHistory.css";

function CityHistory(props) {
  return (
    <div className="cityHistory">
      <h2>Recent Searches</h2>
      {props.history.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityHistory;
