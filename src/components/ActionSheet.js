import React from 'react'
import PropTypes from 'prop-types'

import {
  Animated,
  Modal,
  View,
  ViewPropTypes,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import {
  height
} from '../helpers/dimensions'

import theme from './../config/theme'

class ActionSheet extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    show: PropTypes.bool,

    // Indicate if when user press in the overlay, can request to close
    cancellable: PropTypes.bool,

    // User is requesting to close
    onRequestClose: PropTypes.func.isRequired,

    // Animation
    slideAnimationDuration: PropTypes.number,

    // Callbacks
    beforeOpen: PropTypes.func,
    afterOpen: PropTypes.func,
    beforeClose: PropTypes.func,
    afterClose: PropTypes.func,

    // Styles
    overlayStyle: ViewPropTypes.style
  }

  static defaultProps = {
    children: null,

    show: false,
    cancellable: true,

    // Animation
    slideAnimationDuration: 250,

    // styles
    overlayStyle: {}
  }

  constructor (props) {
    super(props)
    this.state = { show: props.show }
    this.slideAnimation = new Animated.Value(0)
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.show !== this.state.show) {
      return this[this.props.show ? 'show' : 'hide']()
    }
  }

  /**
   * @description
   */
  get interpolationTranslate () {
    const move = this.slideAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0]
    })

    return [{ translateY: move }]
  }

  /**
   * @description
   */
  show = () => {
    this._runAnimationAsync()
    this.setState({ show: true })
  }

  /**
   * @description
   */
  hide = async () => {
    await this._runAnimationAsync()
    this.setState({ show: false })
  }

  /**
   * @description run slide animation to show action sheet contetn
   * @param { Boolean } show - Show / Hide content
   * @return { Void }
   */
  _runAnimationAsync = () => {
    return new Promise(resolve => {
      const options = {
        toValue: this.state.show ? 0 : 1,
        duration: this.props.slideAnimationDuration,
        animation: theme.translateEasing,
        useNativeDriver: true
      }

      Animated.timing(
        this.slideAnimation,
        options
      ).start(resolve)
    })
  }

  handleOnClose = () => {
    this.props.cancellable && this.props.onRequestClose()
  }

  render () {
    return (
      <Modal
        transparent
        animationType="fade"
        visible={this.state.show}
        onRequestClose={this.props.onRequestClose}
      >
        <View style={styles.inner}>
          <TouchableWithoutFeedback onPress={this.handleOnClose}>
            <View
              style={[
                styles.overlay,
                this.props.overlayStyle
              ]}
            />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.contentContainer,
              { transform: this.interpolationTranslate }
            ]}
          >
            {this.props.children}
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  inner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: theme.containerPadding
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.overlayBackgroundColor,
    justifyContent: 'center',
    zIndex: 100
  },
  contentContainer: {
    zIndex: 150
  }
})

export default ActionSheet
