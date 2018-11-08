import React from 'react'
import { Animated, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Cards from '@containers/Cards'
import About from '@containers/About'

import { GlobalStyles, Colors } from '../config/styles';

const routes = {
  Cards: {
    screen: Cards
  },
  About: {
    screen: About
  }
}

const options = {
  initialRouteName: 'Cards',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Cards') {
        iconName = 'md-card';
      } else if (routeName === 'About') {
        iconName = 'md-information-circle-outline';
      }

      return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
    tabBarLabel: () => {
      const { routeName } = navigation.state;
      let label;
      if (routeName === 'Cards') {
        label = 'لیست کارت ها';
      } else if (routeName === 'About') {
        label = 'درباره اپلیکیشن';
      }

      return <Text style={GlobalStyles.navigatorLabel}>{label}</Text>
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.PRIMARY,
    inactiveTintColor: 'gray',
  },
}

export default createBottomTabNavigator(routes, options)
