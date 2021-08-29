import React from 'react'
import Weather from './Weather';
import Header from './Header';
import { useWeather } from "../context/WeatherContext";


function Container() {
    const { weather, setWeather } = useWeather();
    return (
        <div>
            <Header></Header>
            {
                weather && <Weather></Weather>
            }

        </div>
    )
}

export default Container;
