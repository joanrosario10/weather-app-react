import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [city, setCity] = useState("");

  const searchHandler = () => {
    props.onSearch(city);
  };

  return (
    <div className="searchBar">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
