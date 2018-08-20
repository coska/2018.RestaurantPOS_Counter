import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Button'

function styleProvider() {
  const {
    common, textContainerStyle, toggledTextContainer, text, toggledText,
  } = styles
  return {
    common,
    textContainerStyle,
    toggledTextContainer,
    text,
    toggledText,
  }
}

export default ({ onSave, onCancel }) => (
  <View style={{ flex: 1 }}>
    {[
      {
        name: 'SAVE',
        onPress: () => onSave(),
        style: styleProvider(),
      },
      {
        name: 'CANCEL',
        onPress: () => onCancel(),
        style: styleProvider(),
      },
      ].map(button => <Button buttonInfo={button} key={button.name} />)
    }
  </View>
)

const styles = StyleSheet.create({
  common: {
    paddingTop: 20,
  },
  textContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 550,
    height: 55,
    alignSelf: 'stretch',
    backgroundColor: '#505251',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  toggledTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 550,
    height: 55,
    alignSelf: 'stretch',
    backgroundColor: '#007771',
  },
  toggledText: {
    color: 'white',
    fontSize: 20,
  },
})
