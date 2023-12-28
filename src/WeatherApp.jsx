import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import "./InfoBox.css";
import { useState } from 'react';

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo]= useState({
        city:"Wonderland",
        feelslike:11.92,
        temp: 12.05,
        temp_min: 12.05,
        temp_max: 12.05,
        humidity :  100,
        weather: "fog"   
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather app by Tushar</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}