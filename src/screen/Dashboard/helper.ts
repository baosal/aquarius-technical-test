export const formatWeatherInformation = (location: any) => {
  if (!location) return {}
  return {
    location: location.name + ', ' + location.country,
    temp: Math.round(location.main.temp - 273.15),
    tempMax: location.main?.temp_max,
    tempMin: location.main?.temp_min,
    weather: ['Rain'].includes(location.weather) ? 'Clouds' : 'Sunny' as ('Clouds' | 'Sunny'),
    humidity: location.main?.humidity,
    time: new Date(),
  }
}