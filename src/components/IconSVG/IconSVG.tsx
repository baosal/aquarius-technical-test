
import { IIconsProps } from './interface'

import { getSVGIcons } from './svg-icon'

export const IconSVG = ({
  name,
  disabled = false,
  customClass,
  onClick = () => { },
}: IIconsProps) => {
  const svgIcon = getSVGIcons(name)
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