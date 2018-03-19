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

ActionSheetItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,

  iconComponent: PropTypes.node,

  // Callbacks
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,

  // Styles
  last: PropTypes.bool,
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  destructive: PropTypes.bool,
  tintColor: PropTypes.string,
  titleStyle: Text.propTypes.style,
  subtitleStyle: Text.propTypes.style,
  innerStyle: ViewPropTypes.style,
  iconStyle: ViewPropTypes.style
}

ActionSheetItem.defaultProps = {
  subtitle: null,
  iconComponent: null,

  // Callbacks
  onPress: null,
  onLongPress: null,

  // Styles
  last: false,
  destructive: false,
  align: 'center',
  tintColor: theme.infoColor,
  titleStyle: {},
  subtitleStyle: {},
  innerStyle: {},
  iconStyle: {}
}

function ActionSheetItem (props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
      >
        <View
          style={[
            styles.inner,
            { justifyContent: props.align },
            props.innerStyle,
            !props.last && styles.innerNotLast
          ]}
        >
          {props.iconComponent && (
            <View
              style={[
                styles.iconContainer,
                props.iconStyle
              ]}
            >
              {props.iconComponent}
            </View>
          )}
          <View style={styles.textContainer}>
            <Text
              style={[
                props.subtitle ? styles.titleTextWithSubtitle : styles.titleText,
                { color: props.destructive ? theme.dangerColor : props.tintColor },
                props.titleStyle
              ]}
            >
              {props.title}
            </Text>
            {props.subtitle && (
              <Text
                style={[
                  styles.subtitleText,
                  { color: props.destructive ? theme.dangerColor : props.tintColor },
                  props.subtitleStyle
                ]}
              >
                {props.subtitle}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  inner: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    marginHorizontal: theme.gutter,
    alignItems: 'center',
    justifyContent: 'center',
    top: theme.gutter / 5
  },
  innerNotLast: {
    borderBottomWidth: theme.baseBorderWidth,
    borderBottomColor: theme.baseBorderColor
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: theme.largeFontSize,
    fontWeight: '400'
  },
  titleTextWithSubtitle: {
    fontSize: theme.mediumFontSize,
    fontWeight: '400',
    marginBottom: 3
  },
  subtitleText: {
    fontSize: theme.smallFontSize
  }
})

export default ActionSheetItem
