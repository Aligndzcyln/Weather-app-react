import { createContext, useState, useEffect, useContext } from "react";
import { useForm } from '../context/FormContext.js';
import axios from "axios";

const WeatherContext = createContext();
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
let data = [];

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState();
    const { form, setForm } = useForm();

    useEffect(() => {
        data = axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=alerts&units=metric&appid=${API_KEY}`
        )
            .then((res) => setWeather(res.data.daily))
            .catch((e) => console.log(e));
    }, [form])

    const values = {
        weather,
        setWeather,
    };
    console.log(weather)
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export const useWeather = () => useContext(WeatherContext);




