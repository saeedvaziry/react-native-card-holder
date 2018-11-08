import React from 'react'
import { Animated, Easing } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import TabNavigator from '@navigators/TabNavigator'
import AddCard from '@containers/AddCard'

import { GlobalStyles } from '@config/styles'

const routes = {
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'افزودن کارت جدید',
      headerStyle: GlobalStyles.header,
      headerTitleStyle: GlobalStyles.headerTitle,
      headerTintColor: '#fff'
    }
  }
}

const options = {
  initialRouteName: 'TabNavigator',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
      useNativeDriver: true
    },
  })
}

export const AppNavigator = createStackNavigator(routes, options)

createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)

const App = reduxifyNavigator(AppNavigator, "root")

const mapStateToProps = (state) => ({
  state: state.nav,
})

export default connect(mapStateToProps)(App)
