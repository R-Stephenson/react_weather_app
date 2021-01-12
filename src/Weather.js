import React, { useState } from "react";
import Loader from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});

    
    function handleResponse (response){
            setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });
        
    }

function search(){
const apiKey = "3e1b3b8411774a6a5d3ce0ee0f1a08dc";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event){
        event.preventDefault();
        search();

    }

    function handleCityChange(event){
        setCity(event.target.value);
    }
    
    
    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="container">
                <div className="row">
                     <div className="col-9">
                        <input 
                        type="Search" 
                        placeholder="Enter a City..." 
                        className="form-control"
                        autoFocus="on" 
                        onChange={handleCityChange}/>
                         
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
            < WeatherInfo data={weatherData}/>
          
            
            </div>
    );
    } else {
    
search();
    return ( 
         <div className="loadingPage">
          <h2>Loading {" "}</h2>
           
            <Loader
             type="ThreeDots"
             color="#5bc1ff"
             height={7.5}
             width={50}
             timeout={30000} //3 secs
 
            />
          </div>
         

        
    )
    }

   
    
}