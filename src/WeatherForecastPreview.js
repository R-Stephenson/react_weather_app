import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
	function hours(){
		let date = new Date(props.data.dt * 1000)
		let hours = date.getHours();
  	if (hours < 10) {
    hours = `0${hours}`;
  	}

		return `${hours}:00`;
	}	
	
	function temperature() {
		let temperatureMax = Math.round(props.data.main.temp_max);
		let temperatureMin = Math.round(props.data.main.temp_min);
		return( <div>
							<div>
								<strong>↑ {temperatureMax}°C</strong>
							</div>
							<div>
								<small>↓ {temperatureMin}°C</small>
							</div>
						</div>);
	}

	return (
        <div className="weatherForecastPreview col-3"> 
					<div className="hours">{hours()}</div>
					<WeatherIcon code={props.data.weather[0].icon} />
					{temperature()}
        </div>
    );
}