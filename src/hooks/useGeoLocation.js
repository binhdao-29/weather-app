import { useState, useEffect } from 'react'

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coord: { lat: "", lng: "" }
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coord: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    })
  };

  const onError = error => {
    setLocation({
      loaded: true,
      error
    })
  }

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError("Enable location access on your device");
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [])

  return location;
}

export default useGeoLocation
