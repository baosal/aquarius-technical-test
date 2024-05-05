
import { IconNames, getSVGIcons } from './svg-icon'
import { useContext } from 'react';
import { ThemeContext } from 'src/context';
interface IIconsProps {
  name: IconNames
  size?: number
  disabled?: boolean
  customClass?: string
  onClick?: Function
}
export const IconSVG = ({
  name,
  disabled = false,
  customClass,
  onClick = () => { },
}: IIconsProps) => {
  const theme = useContext(ThemeContext)
  const svgIcon = getSVGIcons(name, theme)
  const onClickIcon = (e: any) => {
    if (disabled) return
    onClick(e)
  }
  const base64data = btoa(unescape(encodeURIComponent(svgIcon)));
  return (
    <div className={`cursor-pointer ${customClass}`} onClick={onClickIcon}>
      <img src={`data:image/svg+xml;base64,${base64data}`} alt="" />
    </div>
  )
};