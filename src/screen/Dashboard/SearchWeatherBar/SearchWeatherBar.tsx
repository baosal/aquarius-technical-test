import { useState } from "react";
import { fetchGeo, fetchWeatherLocations } from "src/api/api";
import { IProps } from "./interface";
import { Combobox } from "src/components/Combobox/Combobox";

export const SearchWeatherBar = ({
  onSelectLocation
}: IProps) => {

  const [locationSuggest, setLocationSuggest] = useState<any>([])
  const [isLoading, setLoading] = useState(false)
  const onGetGeo = async (location: string) => {
    try {
      setLoading(true)
      const response = await fetchGeo(location)
      console.log('onGetGeo', response)
      const locations = response.map((item: any) => {
        return {
          name: item.name,
          country: item.country,
          state: item.state,
          long: item.lon,
          lat: item.lat,
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
    <Combobox onSelectItem={onSelectLocation} onSearch={onGetGeo} options={locationSuggest} loading={isLoading}></Combobox>
  )
};