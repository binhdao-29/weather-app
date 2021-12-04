const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "11585f737530f8793851c01426496222";

const callApiByLocation = (lat, lng) => {
  return `${apiUrl}weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
}

const callApiByCityName = (city) => {
  return `${apiUrl}weather?q=${city}&units=metric&appid=${apiKey}`;
}

export { callApiByCityName, callApiByLocation }