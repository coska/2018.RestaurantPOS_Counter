import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Button'
import withButtonInfo from './withButtonInfo'

export default withButtonInfo(({ buttonInfo = [] }) => (
  <View style={styles.container}>
    {buttonInfo.map(button => (
      <Button buttonInfo={button} key={button.name} />
    ))}
  </View>
))

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3130',
    paddingRight: 15,
    paddingLeft: 10,
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
  }
})
