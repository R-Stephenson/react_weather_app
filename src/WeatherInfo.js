import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
  return ( 
		<div className="WeatherInfo">
      <h1>{props.data.city}</h1>
		<div className="text-capitalize descriptionTime">
			<span className="description">{props.data.description}</span>
			<small><FormattedDate date={props.data.date}/></small>
		</div>
			<div className="row mt-1 mb-1">
				<div className="col-7">
					<div className="clearfix">
						<div className="float-left mainIcon">
							<WeatherIcon code={props.data.icon} />
						</div>		
						<div className="float-left">
							<WeatherTemperature celsius={props.data.temperature} />
						</div>
					</div>
				</div>
				<div className="col-5">
					<ul>
						<li>
								Feels like: {Math.round(props.data.feelsLike)}°C
						</li>
						<li>
								Humidity: {props.data.humidity}%
						</li>
						<li>
								Wind: {Math.round(props.data.wind)}mph
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}