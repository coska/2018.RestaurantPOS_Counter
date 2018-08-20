import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  commonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 70,
  },
})

export default function (Component) {
  function Wrapper({ onPressButton, category, ...props }) {
    function styleToggler(term, active, inactive) {
      return category === term ? active : inactive
    }
    const buttonInfo = [
      {
        name: 'Drinks',
        onPress: () => onPressButton('beverages'),
        containerStyle: [
          styles.commonStyle,
          {
            backgroundColor:
              styleToggler(
                'beverages',
                'rgba(255,0,0,1)',
                'rgba(255,0,0,0.4)',
              ),
          }],
        textStyle: {
          fontSize: 25,
          color:
            styleToggler(
              'beverages',
              'rgba(255,255,255,1)',
              'rgba(255,255,255, 0.4)',
            ),
        },
      }, {
        name: 'Appetizer & Side',
        onPress: () => onPressButton('appetizers'),
        containerStyle: [
          styles.commonStyle,
          {
            backgroundColor:
              styleToggler(
                'appetizers',
                'rgba(0,0,255,1)',
                'rgba(0,0,255,0.4)',
              ),
          }],
        textStyle: {
          fontSize: 25,
          color:
            styleToggler(
              'appetizers',
              'rgba(255,255,255,1)',
              'rgba(255,255,255, 0.4)',
            ),
        },
      }, {
        name: 'Main',
        onPress: () => onPressButton('main'),
        containerStyle: [
          styles.commonStyle,
          {
            backgroundColor:
              styleToggler(
                'main' || '',
                'rgba(181,142,38,1)',
                'rgba(181,142,38,0.4)',
              ),
          }],
        textStyle: {
          fontSize: 25,
          color:
            styleToggler(
              'main' || '',
              'rgba(255,255,255,1)',
              'rgba(255,255,255, 0.4)',
            ),
        },
      },
    ]
    return <Component {...props} buttonInfo={buttonInfo} />
  }
  return Wrapper
}

