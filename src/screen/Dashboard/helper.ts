export const formatWeatherInformation = (name: any) => {
  if (!name) return {}
  return {
    name: name.name + ', ' + name.sys?.country,
    temp: Math.round(name.main?.temp - 273.15),
    tempMax: Math.round(name.main?.temp_max - 273.15),
    tempMin: Math.round(name.main?.temp_min - 273.15),
    weather: ['Rain'].includes(name.weather) ? 'Clouds' : 'Sunny' as ('Clouds' | 'Sunny'),
    humidity: name.main?.humidity,
    time: new Date(),
  }
}