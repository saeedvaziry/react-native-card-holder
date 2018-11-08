import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native'
import Ripple from 'react-native-material-ripple'

import styles from './styles'

export default ({ style, textStyle, onPress, text, submitLoader, ...props }) => {
  if (submitLoader) {
    return (
      <Ripple
        style={[styles.container, style]}>
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={true}
          {...props}>
          <ActivityIndicator size="large" color="#ffffff" style={[styles.indicator, textStyle]} />
        </TouchableOpacity>
      </Ripple>
    )
  } else {
    return (
      <Ripple
        style={[styles.container, style]}
        onPress={() => onPress()}>
        <TouchableOpacity
          activeOpacity={0.9}
          {...props}>
          <Text
            style={[styles.text, textStyle]}>
            {text}
          </Text>
        </TouchableOpacity>
      </Ripple>
    )
  }
}