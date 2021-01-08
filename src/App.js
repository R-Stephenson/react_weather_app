import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
         <footer>
           This application was coded by 
            <a 
              href="https://www.linkedin.com/in/romana-stephenson-24767a103/"
              target="_blank" 
              rel="noreferrer">
              Romana Stephenson
            </a> 
           and is{" "}
            <a 
              href="https://github.com/R-Stephenson/react_weather_app"
              target="_blank"
              rel="noreferrer">
              open-sourced on GitHub
            </a>
          </footer>
      </div>
    </div>
  );
}
