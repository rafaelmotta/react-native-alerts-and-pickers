import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ViewPropTypes,
  Text,
  StyleSheet
} from 'react-native'

import theme from '../config/theme'

ActionSheetTitle.propTypes = {
  title: PropTypes.string.isRequired,

  containerStyle: ViewPropTypes.style,
  titleStyle: Text.propTypes.style
}

ActionSheetTitle.defaultProps = {
  containerStyle: {},
  titleStyle: {}
}

function ActionSheetTitle (props) {
  return (
    <View
      style={[
        styles.container,
        props.containerStyle
      ]}
    >
      <Text
        numberOfLines={1}
        style={[
          styles.titleText,
          props.titleStyle
        ]}
      >
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.baseBackgroundColor,
    borderBottomWidth: theme.baseBorderWidth,
    borderBottomColor: theme.baseBorderColor,
    borderRadius: theme.baseBorderRadius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingVertical: theme.gutter,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: theme.baseFontSize,
    color: theme.titleColor
  }
})

export default ActionSheetTitle
