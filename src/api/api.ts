import mockData from './mockData.json';
const key = process.env.REACT_APP_OPEN_WEATHER_KEY
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}

export const fetchWeatherLocations = async (name: string) => {
  try {
    await postData(`https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/find?q=${name}&appid=${key}&units=metric`)
  } catch (error) {
    console.error(error);
  }
  // return mockData
  // return response
  // return getData('https://api.thecatapi.com/v1/images/search?limit=10')
}
export const fetchGeo = async (name: string) => {
  try {
    return getData(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${key}`)
  } catch (error) {
    console.error(error);
  }
  // return mockData
  // return response
  // return getData('https://api.thecatapi.com/v1/images/search?limit=10')
}

export const fetchWeather = async (long: string, lat: string) => {
  try {
    return getData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
  } catch (error) {
    console.error(error);
  }
  // return mockData
  // return response
  // return getData('https://api.thecatapi.com/v1/images/search?limit=10')
}
