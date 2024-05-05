import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Input } from "../Input/Input";
import { IProps } from "./interface";
import { IconSVG } from "../IconSVG/IconSVG";
export const Combobox = ({
  value,
  placeholder,
  loading = false,
  onSelectItem,
  onSearch,
  options = []
}: IProps) => {

  const [isShowDropdown, setIsShowDropdown] = useState(false)
  const [location, setLocation] = useState<number | string>('')
  const closeDropdown = () => {
    setIsShowDropdown(false)
  }
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  const onInput = (input: string | number) => {
    setLocation(input)
    setIsShowDropdown(input ? true : false)
  }
  const handleSearch = async () => {
    if (loading) return
    await onSearch(location)
  }
  return (
    <div className="flex gap-20px w-full items-center" ref={ref} onClick={() => setIsShowDropdown(true)}>
      <div className="relative flex-1">
        <Input value={location} placeholder={placeholder} onInput={onInput} onEnter={handleSearch}></Input>
        <div className="relative w-full mt-2px">
          {isShowDropdown && options.length > 0 &&
            <div className="absolute top-0px left-0px w-full bg-bg-clear rounded-10 min-h-[60px] py-12px flex flex-col">
              {
                options.map((option: any, index: number) =>
                  <div key={index} className="hover:bg-bg-primary px-8px py-12px flex justify-between" onClick={() => onSelectItem(option)}>
                    <div className="font-700">
                      {`${option.name}${option.country && (', ' + option.country)}`}
                    </div>
                    <div>
                      {`Lat: ${option.lat} Long: ${option.long}`}
                    </div>
                  </div>
                )
              }
            </div>
          }
        </div>
      </div>
      <div className="w-60px">
        {loading ? <span className="loading loading-spinner text-primary" /> : <IconSVG name="Search_60" onClick={handleSearch} />}
      </div>
    </div>
  )
};