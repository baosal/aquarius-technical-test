import { useState } from "react";
import { fetchGeo } from "api/api";
import { IProps } from "./interface";
import { Combobox } from "components/Combobox/Combobox";
import { ToastContainer, toast } from 'react-toastify';

export const SearchWeatherBar = ({
  onSelectLocation
}: IProps) => {

  const [locationSuggest, setLocationSuggest] = useState<any>([])
  const [isLoading, setLoading] = useState(false)
  const onGetGeo = async (name: string) => {
    try {
      setLoading(true)
      const response = await fetchGeo(name)
      if (response.length === 0) {
        throw new Error()
      }
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
      toast.error("Sorry, it seems the location you entered is incorrect. Please try another location.", {
        position: "top-left"
      });
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <ToastContainer />
      <Combobox
        placeholder="City name, State, Country Code"
        onSelectItem={onSelectLocation}
        onSearch={onGetGeo}
        options={locationSuggest}
        loading={isLoading}>
      </Combobox>
    </>
  )
};