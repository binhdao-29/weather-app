import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useGeoLocation from '../hooks/useGeoLocation'
import { callApiByCityName, callApiByLocation } from '../assets/api';

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState({});
  const location = useGeoLocation();

  useEffect(() => {
    const { lat, lng } = location.coord;

    if (lat !== "" && lng !== "") {
      const apiUrl = city !== undefined ? callApiByCityName(city) : callApiByLocation(lat, lng);

      fetch(`${apiUrl}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        });
    }

  }, [city, location]);

  const getCurrentTime = () => {
    const d = new Date()
    const localTime = d.getTime()
    const localOffset = d.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    const currentTime = utc + (1000 * weather.timezone)
    return new Date(currentTime)
  }

  return (
    <>
      {
        weather.main !== undefined ? (
          <div className={(weather.main.temp > 19) ? 'card' : 'card card card-cold'}>
            <div className="card-content">
              <div>
                <div className="card-name">{city || 'My location'}</div>
                <div className="card-time">
                  {
                    city !== undefined ? moment(getCurrentTime()).format("HH:mm") : weather.name
                  }
                </div>
              </div>
              <div className="card-status">{weather.weather[0].description}</div>
            </div>
            <div className="card-info">
              <div className="card-temp">{Math.round(weather.main.temp)}°</div>
              <div className="card-temp-scope">
                <span>H: {Math.round(weather.main.temp_max)}°</span>
                <span>L: {Math.round(weather.main.temp_min)}°</span>
              </div>
            </div>
          </div>
        ) : ('')
      }
    </>
  )
}

export default WeatherCard
