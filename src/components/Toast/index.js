import React, { Component } from 'react'
import Toast from 'react-native-easy-toast'

import styles from './styles'

export default class CustomToast extends Component {
  componentDidMount = () => {
    this.props.onRef(this)
  }

  componentWillUnmount = () => {
    this.props.onRef(undefined)
  }

  show = (msg) => {
    this.toast.show(msg)
  }

  render() {
    return (
      <Toast
        ref={(c) => this.toast = c}
        style={styles.background}
        position='bottom'
        positionValue={130}
        fadeInDuration={300}
        fadeOutDuration={300}
        opacity={0.9}
        textStyle={styles.color}
        {...this.props}
      />
    )
  }
}