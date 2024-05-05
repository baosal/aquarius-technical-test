import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Input } from "../Input/Input";
import { IProps } from "./interface";
import { IconSVG } from "../IconSVG/IconSVG";

export const Combobox = ({
  value,
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
  const handleSearch = () => {
    if (loading) return
    onSearch()
  }
  return (
    <div className="flex gap-20px w-full" ref={ref} onClick={() => setIsShowDropdown(true)}>
      <div className="relative flex-1">
        <Input value={location} onInput={onInput} onEnter={handleSearch}></Input>
        <div className="relative w-full mt-2px">
          {isShowDropdown &&
            <div className="absolute top-0px left-0px w-full bg-bg-clear rounded-10 min-h-[60px] py-12px flex flex-col">
              {options.length > 0 ?
                options.map((option: any, index: number) =>
                  <div key={index} className="hover:bg-bg-primary px-8px py-12px flex justify-between" onClick={() => onSelectItem(option)}>
                    <div className="font-700">
                      {option.name}
                    </div>
                    <div>
                      {option.country}
                    </div>
                    <div>
                      {option.lat}
                    </div>
                    <div>
                      {option.long}
                    </div>
                  </div>
                )
                : <div className="text-center px-8px py-12px">Location not found</div>
              }
            </div>
          }
        </div>
      </div>
      {loading ? <span className="loading loading-spinner text-primary" /> : <IconSVG name="Search_60" onClick={handleSearch} />}
    </div>
  )
};