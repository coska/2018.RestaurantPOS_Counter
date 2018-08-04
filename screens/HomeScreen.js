import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Header />
        </View>
        <Text style={{ flex: 6 }}>HomeScreen</Text>
        <View style={{ flex: 1 }}>
          <Footer />
        </View>
      </View>
    )
  }
}
