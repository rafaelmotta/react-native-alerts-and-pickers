import {
  Platform,
  Easing
} from 'react-native'

const isIOS = Platform.OS === 'ios'

export default {
  get infoColor () {
    return isIOS ? '#007AFF' : '#007AFF'
  },

  get dangerColor () {
    return isIOS ? '#ff3b30' : '#ff3b30'
  },

  get baseBackgroundColor () {
    return '#FFFFFF'
  },

  get baseBorderColor () {
    return '#D1D3CE'
  },

  get baseBorderWidth () {
    return 0.5
  },

  get baseBorderRadius () {
    return 12.5
  },

  get gutter () {
    return 15
  },

  get largeFontSize () {
    return 20
  },

  get mediumFontSize () {
    return 16
  },

  get baseFontSize () {
    return 14
  },

  get smallFontSize () {
    return 12
  },

  // Action Sheet Title
  get titleColor () {
    return '#A9A9A9'
  },

  // Animations
  get translateEasing () {
    return Easing.bezier(0.25, 0.46, 0.45, 0.94)
  }
}
