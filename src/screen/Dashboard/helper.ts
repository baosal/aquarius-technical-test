export const formatWeatherInformation = (item: any) => {
  if (!item) return {}
  return {
    name: item.name + ', ' + item.sys?.country,
    temp: Math.round(item.main?.temp - 273.15),
    tempMax: Math.round(item.main?.temp_max - 273.15),
    tempMin: Math.round(item.main?.temp_min - 273.15),
    weather: ['Rain', 'Clouds'].includes(item.weather?.[0]?.main) ? 'Clouds' : 'Sunny' as ('Clouds' | 'Sunny'),
    humidity: item.main?.humidity,
    time: new Date(),
  }
}