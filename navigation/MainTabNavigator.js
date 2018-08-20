import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import UserSetupScreen from '../screens/UserSetupScreen'
import MenuSetupScreen from '../screens/MenuSetupScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  UserSetup: UserSetupScreen,
  MenuSetup: MenuSetupScreen,
}, {
  navigationOptions: {
    header: null,
  },
})

HomeStack.navigationOptions = {
  header: null,
}

export default HomeStack
