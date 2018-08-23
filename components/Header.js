import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import moment from 'moment'
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
              {moment(time).utcOffset(-4).format('M/D/YYYY HH:mm')}
            </Text>
          )}
        />
      </View>
    </LinearGradient>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 60,
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
