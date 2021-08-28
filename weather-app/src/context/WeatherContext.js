import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily&units=metric&appid=${API_KEY}`
        )
            .then((res) => setWeather(res.data))
            .catch((e) => console.log(e));
    }, [])

    const values = {
        weather,
        setWeather,
    };

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export const useWeather = () => useContext(WeatherContext);