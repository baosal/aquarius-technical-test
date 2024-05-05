import React, { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
interface IProps {
  value: string
}

export const Combobox = ({
  value
}: IProps) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false)
  const [location, setLocation] = useState('')
  const closeDropdown = () => {
    setIsShowDropdown(false)
  }
  const onInput = (e: any) => {
    setLocation(e.target.value)
    closeDropdown()
  }
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div className="" ref={ref} onClick={() => setIsShowDropdown(true)}>
      <input type="text" value={location} onChange={onInput} />
      <div className="relative">
        {isShowDropdown &&
          <div className="absolute top-0px left-0px">33334514</div>
        }
      </div>
    </div>
  )
};