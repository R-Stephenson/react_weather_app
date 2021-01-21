import React, { useState } from "react";
import Loader from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./Weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse (response){
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
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
      
    function refreshPage() {
    window.location.reload(false);
    }

    function userPosition() {
    navigator.geolocation.getCurrentPosition(searchCurrentLocation)
    }

    function searchCurrentLocation(position) {
    const apiKey = "3e1b3b8411774a6a5d3ce0ee0f1a08dc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 searchBar">
                                <input 
																	type="Search" 
																	placeholder="Search..." 
																	className="form-control"
																	onChange={handleCityChange}
                                />
                            </div>
                            <div className="col-4">
                              <div class="btn-group" role="group" aria-label="Basic example">
                                <button
                                  type="submit"
                                  value="search"
                                  class="btn btn-secondary searchIcon"
                                >
                                  <FontAwesomeIcon icon="search" />
                                </button>
                                <button
                                  type="submit"
                                  value="search"
                                  class="btn btn-secondary locationIcon"
                                  onClick={userPosition}
                                 >
                                  <FontAwesomeIcon icon="map-marker-alt" />
                                </button>
                                <button
                                  class="btn btn-secondary refreshIcon"
                                  onClick={refreshPage}
                                >
                                  <FontAwesomeIcon icon="redo" />
                                </button>
                              </div>
                            </div>
                        </div>
                    </div>
                </form>
                < WeatherInfo data={weatherData} />
								< WeatherForecast city={weatherData.city} />
            </div>
        );
    } else {    
    search();
			return ( 
				<div className="loader">
					<h2>Loading {" "}</h2>
						<Loader
							type="ThreeDots"
							color="#5bc1ff"
							height={7.5}
							width={50}
							timeout={30000} //30 secs
						/>
				</div>
			)
  }
}