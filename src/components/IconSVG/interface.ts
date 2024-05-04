import { IconNames } from "./svg-icon"

export interface IIconsProps {
  name: IconNames
  size?: number
  disabled?: boolean
  customClass?: string
  onClick?: Function
}