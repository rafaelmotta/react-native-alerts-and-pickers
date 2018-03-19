import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet
} from 'react-native'

class ActionSheetContent extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const childrenCount = React.Children.count(this.props.children)

    return (
      <View style={styles.container}>
        {React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
            first: index === 0,
            last: (index + 1) === childrenCount
          })
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 8
  }
})

export default ActionSheetContent
