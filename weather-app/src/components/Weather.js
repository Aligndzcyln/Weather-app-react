import React from "react";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather, setWeather } = useWeather();

  return (
    <div>
      {weather.map((item, index) => {
        return item["weather"][0]["main"];
      })}
    </div>
  );
}

export default Weather;
