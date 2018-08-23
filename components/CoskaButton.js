import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CoskaButton = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
  >
    <View style={styles.button}>
      <Text style={styles.text}>{props.label}</Text>
    </View>

  </TouchableOpacity>
)

export default CoskaButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#225447',
    margin: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})
