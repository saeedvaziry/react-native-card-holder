import React, { Component } from 'react'
import { Text, Animated, BackHandler, View } from 'react-native'

import Toast from '@components/Toast'

import { GlobalStyles, Colors } from '@config/styles'
import styles from './styles'

class About extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleBackPress)
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress)
  }

  _handleBackPress = () => {
    BackHandler.exitApp()
    return true
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <Toast onRef={ref => (this.toast = ref)} />
        <Animated.ScrollView contentContainerStyle={[GlobalStyles.content, styles.content]} ref={ref => this.scrollView = ref} showsVerticalScrollIndicator={false}>
          <Text style={[styles.text]}>
            این اپلیکیشن با استفاده از React Native نوشته شده و بیشتر جنبه ی تمرینی داشته اما ممکنه برای بعضی از دوستان کاربردی داشته باشه
          </Text>
        </Animated.ScrollView>
      </View>
    )
  }
}

export default About