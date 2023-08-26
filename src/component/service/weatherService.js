import { API_ENDPOINT } from "../utilis/constants";

export const fetchWeatherData = async (city) => {
  const API_KEY = "feeccc9e1982bbedfd94b04555be44d7";
  const response = await fetch(
    `${API_ENDPOINT}weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Failed to get weather");
  }
  const data = await response.json();

  return data;
};
