import { useState } from "react";
import { fetchWeather } from "src/api/api";
import { IProps } from "./interface";
import { Combobox } from "src/components/Combobox/Combobox";

export const SearchBard = ({
  onSelectLocation
}: IProps) => {

  const [locationSuggest, setLocationSuggest] = useState<any>([])
  const [isLoading, setLoading] = useState(false)
  const onSearchLocation = async (location: string) => {
    try {
      setLoading(true)
      const response = await fetchWeather(location)
      const locations = response.list.map(item => {
        return {
          name: item.name,
          country: item.sys?.country,
          long: item.coord.lon,
          lat: item.coord.lat,
          main: item.main,
          weather: item.weather?.[0]
        }
      })
      setLocationSuggest(locations)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }
  return (
    <Combobox onSelectItem={onSelectLocation} onSearch={onSearchLocation} options={locationSuggest} loading={isLoading}></Combobox>
  )
};