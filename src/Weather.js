import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});

    
    function handleResponse (response){
            setWeatherData({
            ready: true,
            city: response.data.name,
            date: "Friday 13:39",
            description: response.data.weather[0].description,
            iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });
        
    }
    
    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="container">
                <div className="row">
                     <div className="col-9">
                        <input 
                        type="Search" 
                        placeholder="Enter a City..." 
                        className="form-control"
                        autoFocus="on" />
                         
                   </div>
                   <div className="col-3">
                        <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-primary w-100" />
                    </div>
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img 
                            src={weatherData.iconURL} 
                            alt={weatherData.description} 
                        />
                        <div classname="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Feels like: {Math.round(weatherData.feelsLike)}°C
                        </li>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(weatherData.wind)}mph
                        </li>
                    </ul>
                </div>
            </div>
            
            </div>
    );
    } else {
   const apiKey = "3e1b3b8411774a6a5d3ce0ee0f1a08dc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    return (  
        <h2>Loading...</h2>
    )
    }

   
    
}