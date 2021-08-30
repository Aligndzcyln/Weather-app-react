import React from "react";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather, setWeather } = useWeather();

  const weatherSvg = {
    Clear: <i className="fas fa-sun"></i>,
    Clouds: <i className="fas fa-cloud"></i>,
    Rain: <i className="fas fa-cloud-showers-heavy"></i>,
    Snow: <i className="fas fa-snowflake"></i>,
  };

  const card = {
    description: "",
    main: "",
  };

  return (
    <div className="container">
      <div className="row">
        {weather.map((item, index) => {
          card.description = item["weather"][0]["description"];
          card.main = item["weather"][0]["main"];
          console.log(card.description);
          return (
            <div key={index} className="col-sm-3 col-md-2">
              <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">
                  Day
                </div>
                <div className="card-body text-success">
                  <h5 className="card-title">{card.main}</h5>
                  <p className="card-text">
                    <div style={{ fontSize: 120 }}>{weatherSvg[card.main]}</div>

                    {card.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-success">
                  {item["temp"]["day"]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;
