import React from "react";
import CityItem from "./CityItem";
import "./CityHistory.css";

function CityItemHistory(props){
    return (
      <div>
        <h2>Searched History</h2>
        <p>{props.history.map(city => <CityItem key={props.id} city ={city}/>)}</p>
      </div>
    );
}

export default CityItemHistory;