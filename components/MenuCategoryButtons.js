import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import withCategory from './withCategory'

export default withCategory(({ buttonInfo, ...props }) => (
  <View style={styles.buttonContainer}>
    {
      buttonInfo.map(({
        name, onPress, containerStyle, textStyle,
      }) => (
        <TouchableOpacity style={styles.opacity} onPress={onPress} key={name}>
          <View style={containerStyle}>
            <Text style={textStyle}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      ))
    }
  </View>
))

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    marginBottom: 25,
    marginLeft: 30,
    width: 630,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  opacity: {
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})
