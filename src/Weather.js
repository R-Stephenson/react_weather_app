import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Cardiff</h1>
            <ul>
                <li>Friday 13:39</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img 
                            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" 
                            alt="Mostly Cloudy" 
                        />
                        <div classname="float-left">
                            <span className="temperature">6</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
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