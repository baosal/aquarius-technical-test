import { lightIcons } from "./lightIcon"
import { nightIcons } from "./nightIcon"
function compileSVGIcons(theme?: string) {
	return theme === "night" ? nightIcons : lightIcons
}

const SVG_ICONS = compileSVGIcons()
export type IconNames = keyof typeof SVG_ICONS

export function getSVGIcons(
	name: IconNames,
	theme: string
) {
	const SVG_ICONS = compileSVGIcons(theme)
	return SVG_ICONS[name]
}
