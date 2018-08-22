import React from 'react'
import { StyleSheet } from 'react-native'

function styleProvider() {
  const {
    common,
    textContainerStyle,
    text,
    toggledTextContainer,
    toggledText,
  } = styles
  return {
    common,
    textContainerStyle,
    text,
    toggledTextContainer,
    toggledText,
  }
}

export default function (Component) {
  function Wrapper(props) {
    const {
      common, toggledText, toggledExitButton, exitText, exitButton,
    } = styles

    const { screenSwitcher } = props

    const buttonInfo = [
      {
        name: 'Order List',
        onPress: () => { screenSwitcher('OrderList') },
        style: styleProvider(),
      },
      {
        name: 'Table Setup',
        onPress: () => { screenSwitcher('TableSetup') },
        style: styleProvider(),
      },
      {
        name: 'Menu Setup',
        onPress: () => { screenSwitcher('MenuSetup') },
        style: styleProvider(),
      },
      {
        name: 'User Setup',
        onPress: () => { screenSwitcher('UserSetup') },
        style: styleProvider(),
      },
      {
        name: '',
        onPress: () => {},
        style: {
          common: { flex: 1 },
          textContainerStyle: { flex: 1 },
        },
      },
      {
        name: 'Exit',
        onPress: () => {},
        style: {
          common,
          textContainerStyle: exitButton,
          text: exitText,
          toggledTextContainer: toggledExitButton,
          toggledText,
        },
      },
    ]
    return <Component {...props} buttonInfo={buttonInfo} />
  }
  return Wrapper
}

const styles = StyleSheet.create({
  common: {
    marginLeft: 15,
    flex: 1,
  },
  textContainerStyle: {
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
  toggledTextContainer: {
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

