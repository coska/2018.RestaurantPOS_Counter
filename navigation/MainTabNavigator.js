import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  navigationOptions: {
    header: null,
  },
})

HomeStack.navigationOptions = {
  header: null,
}

export default HomeStack
