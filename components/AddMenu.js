import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: '#00ACA8', fontWeight: 'bold' }}>
        {'+'}
      </Text>
      <Text style={{ fontSize: 25, color: '#00ACA8' }}>
        {'Add an Item'}
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    minWidth: 187,
    height: 200,
    marginTop: 10,
    paddingTop: 40,
    alignItems: 'center',
    borderStyle: 'dotted',
    borderWidth: 3,
    borderColor: '#007771',
  },
})
