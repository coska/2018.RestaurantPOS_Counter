import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

export default class Button extends React.Component {
  state = { pressed: false }
  onHideUnderlay = () => {
    this.setState({ pressed: false })
  }
  onShowUnderlay = () => {
    this.setState({ pressed: true })
  }
  render() {
    const {
      name, onPress, style: {
        common, textContainerStyle,
        toggledTextContainer, text, toggledText,
      },
    } = this.props.buttonInfo
    const { pressed } = this.state
    return (
      <View style={common} key={name}>
        <TouchableHighlight
          onPress={onPress}
          activeOpacity={1}
          onHideUnderlay={this.onHideUnderlay}
          onShowUnderlay={this.onShowUnderlay}
        >
          <View style={pressed ? toggledTextContainer : textContainerStyle}>
            <Text style={pressed ? toggledText : text}>{name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
