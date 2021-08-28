import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WeatherContext = createContext();
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=alerts&units=metric&appid=${API_KEY}`
        )
            .then((res) => setWeather(res.data))
            .catch((e) => console.log(e));
    }, [])

    const values = {
        weather,
        setWeather,
    };
    console.log(weather)
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export const useWeather = () => useContext(WeatherContext);