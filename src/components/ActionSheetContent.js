import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import theme from '../config/theme'

class ActionSheetContent extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
            last: index + 1 === this.props.children.length
          })
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.baseBackgroundColor,
    borderRadius: theme.baseBorderRadius,
    alignItems: 'center',
    marginBottom: 10
  }
})

export default ActionSheetContent
