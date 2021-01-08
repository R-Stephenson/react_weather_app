import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="container">
                <div className="row">
                    <div classname="col-9">
                        <input 
                        type="Search" 
                        placeholder="Enter a City..." 
                        className="form-control" /> 
                    </div>
           
                    <div classname="col-3">
                        <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-primary" />
                    </div>
                </div>
                </div>
            </form>
            <h1>Cardiff</h1>
            <ul>
                <li>Friday 13:39</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Mostly Cloudy" />
                6°C</div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 10%
                        </li>
                        <li>
                            Humidity: 84%
                        </li>
                        <li>
                            Wind: 6mph
                        </li>
                    </ul>
                </div>
            </div>
            
            </div>
    )
}