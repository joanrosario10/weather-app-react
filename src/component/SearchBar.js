import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [city, setCity] = useState("");

  const handleCitynames = () => {
    props.onSearch(city);
    setCity("");
  };

  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleCitynames}>Search</button>
    </div>
  );
}

export default SearchBar;
