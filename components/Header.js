import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import Clock from './Clock'

export default () => (
  <View style={styles.container}>
    <LinearGradient
      style={styles.linear}
      colors={['#00BEDA', '#0099A5', '#007470', '#005948']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          COSKA SUSHI
        </Text>
      </View>
      <View style={styles.clockContainer}>
        <Clock
          render={({ time }) => (
            <Text style={styles.clock}>
              {
                `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()} ${time.toLocaleTimeString().slice(0, 5)}`
              }
            </Text>
          )}
        />
      </View>
    </LinearGradient>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linear: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  clockContainer: {
    marginRight: 15,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  clock: {
    fontSize: 20,
    color: '#DCDCDC',
  },
})
