import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ViewPropTypes,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import theme from '../config/theme'

ActionSheetSubmitButton.propTypes = {
  label: PropTypes.string.isRequired,

  // Calbacks
  onPress: PropTypes.func,

  // Styles
  containerStyle: ViewPropTypes.style,
  labelStyle: Text.propTypes.style
}

ActionSheetSubmitButton.defaultProps = {
  onPress: null,
  containerStyle: {},
  labelStyle: {}
}

function ActionSheetSubmitButton (props) {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View
          style={[
            styles.container,
            props.containerStyle
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              styles.labelText,
              props.labelStyle
            ]}
          >
            {props.label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.baseBackgroundColor,
    borderRadius: theme.baseBorderRadius,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    fontSize: theme.largeFontSize,
    color: '#007AFF',
    fontWeight: '600'
  }
})

export default ActionSheetSubmitButton
