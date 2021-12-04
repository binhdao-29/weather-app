import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useGeoLocation from "../hooks/useGeoLocation";
import { callApiByLocation } from '../assets/api'

function Main() {
  const [weather, setWeather] = useState({});
  const location = useGeoLocation();

  useEffect(() => {
    const { lat, lng } = location.coord;


    if (lat !== "" && lng !== "") {
      const apiUrl = callApiByLocation(lat, lng);

      fetch(`${apiUrl}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        });
    }
  }, [location]);

  return (
    <>
      {
        weather.main !== undefined ? (
          <div className="app-container">
            <Link to="/layout">
              <div className="more-location">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            <div className="location">{weather.name}</div>
            <div className="temp">{Math.round(weather.main.temp)}°</div>
            <div className="status">{weather.weather[0].description}</div>
            <div className="temp-scope">
              <span>H: {Math.round(weather.main.temp_max)}°</span>
              <span>L: {Math.round(weather.main.temp_min)}°</span>
            </div>
          </div>
        ) : ('')
      }
    </>
  );
}

export default Main;
