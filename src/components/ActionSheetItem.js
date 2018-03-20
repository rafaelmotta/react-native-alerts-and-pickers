import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ViewPropTypes,
  Text,
  StyleSheet,
  TouchableHighlight
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
  first: PropTypes.bool,
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
  first: false,
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
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="transparent"
        onPress={props.onPress}
        onLongPress={props.onLongPress}
      >
        <View
          style={[
            styles.inner,
            { justifyContent: props.align },
            props.innerStyle,
            props.first && styles.innerFirst,
            props.last && styles.innerLast,
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
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  inner: {
    backgroundColor: theme.baseBackgroundColor,
    flexDirection: 'row',
    height: theme.defaultItemHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.gutter
  },
  innerFirst: {
    borderTopRightRadius: theme.baseBorderRadius,
    borderTopLeftRadius: theme.baseBorderRadius
  },
  innerLast: {
    borderBottomRightRadius: theme.baseBorderRadius,
    borderBottomLeftRadius: theme.baseBorderRadius
  },
  innerNotLast: {
    borderBottomWidth: theme.baseBorderWidth,
    borderBottomColor: theme.baseBorderColor
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: theme.gutter / 5,
    marginRight: theme.gutter
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainerWithIcon: {
    position: 'absolute',
    left: 55,
    alignItems: 'center'
  },
  titleText: {
    fontSize: theme.largeFontSize,
    fontWeight: '400'
  },
  titleTextWithSubtitle: {
    fontSize: theme.mediumFontSize,
    fontWeight: '400',
    marginBottom: theme.gutter / 5
  },
  subtitleText: {
    fontSize: theme.smallFontSize
  }
})

export default ActionSheetItem
