import React from 'react'
import { StyleSheet } from 'react-native'

export default function (Component) {
  function Wrapper(props) {
    const buttonInfo = [
      {
        name: 'Order List',
        onPress: () => {},
        containerStyle: styles.common,
        textContainerStyle: styles.textContainer,
        text: styles.text,
        toggledTextContainer: styles.toggledContainer,
        toggledText: styles.toggledText,
      },
      {
        name: 'Table Setup',
        onPress: () => {},
        containerStyle: styles.common,
        textContainerStyle: styles.textContainer,
        text: styles.text,
        toggledTextContainer: styles.toggledContainer,
        toggledText: styles.toggledText,
      },
      {
        name: 'Menu Setup',
        onPress: () => {},
        containerStyle: styles.common,
        textContainerStyle: styles.textContainer,
        text: styles.text,
        toggledTextContainer: styles.toggledContainer,
        toggledText: styles.toggledText,
      },
      {
        name: 'User Setup',
        onPress: () => {},
        containerStyle: styles.common,
        textContainerStyle: styles.textContainer,
        text: styles.text,
        toggledTextContainer: styles.toggledContainer,
        toggledText: styles.toggledText,
      },
      {
        name: '',
        onPress: () => {},
        containerStyle: { flex: 1 },
        textContainerStyle: { flex: 1 },
      },
      {
        name: 'Exit',
        onPress: () => {},
        containerStyle: styles.common,
        textContainerStyle: styles.exitButton,
        text: styles.exitText,
        toggledTextContainer: styles.toggledExitButton,
        toggledText: styles.toggledText,
      },
    ]
    return <Component buttonInfo={buttonInfo} {...props} />
  }
  return Wrapper
}

const styles = StyleSheet.create({
  common: {
    marginLeft: 15,
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#D7D7D7',
  },
  exitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#505251',
  },
  text: {
    color: '#1E1E1E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  exitText: {
    color: '#eee9e9',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggledContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#007771',
  },
  toggledExitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#D21404',
  },
  toggledText: {
    color: '#eee9e9',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

