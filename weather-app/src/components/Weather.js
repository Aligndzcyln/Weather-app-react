import React from "react";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather, setWeather } = useWeather();

  const weatherSvg = {
    Clear: <i style={{ color: "#fcc203" }} className="fas fa-sun"></i>,
    Clouds: <i style={{ color: "#949494" }} className="fas fa-cloud"></i>,
    Rain: (
      <i
        style={{ color: "#949494" }}
        className="fas fa-cloud-showers-heavy"
      ></i>
    ),
    Snow: <i style={{ color: "#d9d9d9" }} className="fas fa-snowflake"></i>,
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
              <div className="card border-0 mb-3">
                <div className="card-header bg-transparent border-0">Day</div>
                <div className="card-body ">
                  <h5 className="card-title">{card.main}</h5>
                  <p className="card-text">
                    <div style={{ fontSize: 120 }}>{weatherSvg[card.main]}</div>

                    {card.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
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
