import { useScrollTrigger } from "@mui/material";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";
import { useState } from "react";


export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Mumbai",
        feelsLike: 37.99,
        humidity:74,
        temp: 30.99,
        tempMax: 30.99,
        tempMin: 30.94,
        weather:"haze",

    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div className="WeatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        
    )
}