import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview.js";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleForecastResponse(response){
		setForecast(response.data);
		setLoaded(true);
	}
	
	if (loaded && props.city === forecast.city.name) {
		return (
			<div className="weatherForecast row">
				{forecast.list.slice(0, 4).map(function(forecastItem){
					return <WeatherForecastPreview data={forecastItem} />})}
			</div>
		);

	} else {
			let apiKey = "3e1b3b8411774a6a5d3ce0ee0f1a08dc";
			let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleForecastResponse);
		
			return null;
		}


}