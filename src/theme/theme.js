import fontSize from './fontSize'
import fontWeight from './fontWeight'
import spacing from './spacing'
import borderRadius from './borderRadius'
import themeColors from './colorVariant'

const theme = {
  screens: {
    'sm': '590px',
  },
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
  fontSize: fontSize,
  fontWeight: fontWeight,
  colors: themeColors,
  borderRadius: borderRadius,
  wordBreak: {
    'break-word': 'break-word'
  },
  transitionProperty: {
    height: 'height',
    spacing: 'margin, padding'
  },
}

export default theme
