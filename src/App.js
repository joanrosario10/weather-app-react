import React, { useState } from "react";
import Header from "../src/component/Header";
import SearchBar from "../src/component/SearchBar";
import WeatherDisplay from "../src/component/WeatherDisplay";
import CityItemHistory from "../src/component/CityItemHistory";
import ErrorNotification from "../src/component/ErrorNotification";
import { fetchWeatherData } from "../src/component/service/weatherService";
import "./app.css";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityHistory, setCityHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      const data = await fetchWeatherData(cityName);
      if (data && data.name) {
        setWeatherData(data);
        setCityHistory((prevHistory) => [...prevHistory, data]);
        setError(null);
      } else {
        setError("City not found");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorNotification message={error} />}
      <WeatherDisplay weatherData={weatherData} />
      <CityItemHistory history={cityHistory} />
    </div>
  );
}

export default App;
