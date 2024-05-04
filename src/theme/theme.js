import fontSize from './fontSize'
import fontWeight from './fontWeight'
import spacing from './spacing'
import borderRadius from './borderRadius'
import lineHeight from './lineHeight'
import themeColors from './themeColors'

const theme = {
  animation: {
    hide: 'hide 0.2s linear forwards',
    show: 'show 0.2s linear forwards'
  },
  keyframes: {
    'hide': {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 0,
        display: 'none'
      }
    },
    'show': {
      '0%': {
        opacity: 0,
        display: 'none'
      },
      '100%': {
        opacity: 1
      }
    }
  },
  spacing: spacing,
  fontFamily: {
    'title': ['Nunito', 'Nunito Sans']
  },
  fontSize: fontSize,
  fontWeight: fontWeight,
  lineHeight: lineHeight,
  colors: themeColors,
  borderRadius: borderRadius,
  wordBreak: {
    'break-word': 'break-word'
  },
  flex: {
    2: '2 2 0%'
  },
  transitionProperty: {
    height: 'height',
    spacing: 'margin, padding'
  },
}

export default theme
