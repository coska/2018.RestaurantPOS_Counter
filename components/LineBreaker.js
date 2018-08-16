import React from 'react'
import { View } from 'react-native'

export default ({ color = '' }) => (
  <View
    style={{
      backgroundColor: color,
      height: 1,
    }}
  />
)
