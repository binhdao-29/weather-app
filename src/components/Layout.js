import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";

const initCities = ["Hue", "London", "Boston"];

function Layout() {
  const [cities, SetCities] = useState(initCities);
  const inputRef = useRef();

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      SetCities([inputRef.current.value, ...cities]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="app-layout">
      <Link to="/weather-app">
        <div className="more-location">
          <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
      <h3 className="app-heading">Weather</h3>
      <div className="app-search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search for a city" ref={inputRef} onKeyPress={handleEnter} />
      </div>
      <div className="card-container">
        <WeatherCard />
        {
          cities.map((city, index) => (
            <WeatherCard city={city} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default Layout;
