import React from 'react'
import { View, Text } from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}
