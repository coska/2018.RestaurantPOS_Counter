import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default ({
  title,
  item: {
    imageFile, name, price,
  },
  onPress,
}) => {
  const {
    itemContainer, subIndex, upperIndex, titleStyle, img, nameStyle, priceStyle,
  } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={itemContainer}>
        <View style={subIndex}>
          <Text style={titleStyle}>
            {title}
          </Text>
          <Image style={img} source={{ uri: imageFile }} />
        </View>
        <View style={upperIndex}>
          <Text numberOfLines={1} style={nameStyle}>
            {name}
          </Text>
          <Text style={priceStyle}>
            {`$ ${price}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: 10,
    marginRight: 10,
    minWidth: 187,
    height: 200,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#54585F',
  },
  subIndex: {
    alignItems: 'center',
    zIndex: -1,
    width: 100,
    height: 140,
    position: 'absolute',
  },
  upperIndex: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: 187,
    height: 80,
    zIndex: 2,
    backgroundColor: 'rgba(54,54,58,0.8)',
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  img: {
    width: 120,
    height: 110,
  },
  nameStyle: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },
  priceStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
