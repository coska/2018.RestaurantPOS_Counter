import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LineBreaker from './LineBreaker'

const dummy = [
  {
    name: 'Johnny',
    phone: '648-674-3233',
    desc: 'some description!!!',
  },
  {
    name: 'Tylor',
    phone: '621-622-3231',
    desc: 'some other description!!!',
  },
  {
    name: 'Tuker',
    phone: '948-614-3133',
    desc: 'another description!!!!!',
  },
]

export default (props) => {
  const {
    listContainer, text, deleteButton, buttonContainer, editButton,
    staffAddButton,
  } = styles
  return (
    <View style={{ flex: 1 }}>
      <View style={listContainer}>
        {(() => dummy.map(data => (
          <View key={data.name} style={{ flexDirection: 'row' }}>
            <Text style={[text, { width: 50 }]}>
              {dummy.indexOf(data) + 1}
            </Text>
            <Text style={[text, { width: 200 }]}>
              {data.name}
            </Text>
            <Text style={[text, { width: 680 }]}>
              {data.phone}
            </Text>
            <View style={buttonContainer}>
              <TouchableOpacity onPress={() => props.onEdit(data)}>
                <Text style={editButton}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.onDelete()}>
                <Text style={deleteButton}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          ))
        )()}
        <LineBreaker color="white" />
        <View>
          <TouchableOpacity onPress={props.modalToggler}>
            <Text style={staffAddButton}>
              {'+Add a staff'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#000000',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  text: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 10,
    height: 50,
  },
  buttonContainer: {
    marginTop: 5,
    marginLeft: 40,
    marginBottom: 5,
    flexDirection: 'row',
  },
  editButton: {
    color: 'white',
    fontSize: 20,
    width: 100,
    height: 50,
    paddingTop: 10,
    paddingLeft: 30,
  },
  deleteButton: {
    color: 'white',
    fontSize: 20,
    width: 130,
    height: 50,
    paddingTop: 10,
    paddingLeft: 35,
  },
  staffAddButton: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
    fontSize: 20,
    color: '#00ABA9',
  },
})
