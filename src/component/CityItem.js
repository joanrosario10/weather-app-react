import React from "react";
import "./CityItem.css";

function CityItem(props) {
  return <p className="cityItem">{props.city.name}</p>;
}

export default CityItem;
