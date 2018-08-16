import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Modal from 'react-native-modal'
import LineBreaker from './LineBreaker'
import ModalButtons from './ModalButtons'
import UserList from './UserList'


class UserSetup extends React.Component {
  state = {
    modalVisible: false,
    inputName: '',
    inputPhone: '',
    inputDesc: '',
  }
  onSaveHandler = () => {
    /** Wire up with addStaff function */
  }
  onEditStaff = ({ name, phone, desc }) => {
    this.setState(({
      modalVisible,
    }) => ({
      modalVisible: !modalVisible,
      inputName: name,
      inputPhone: phone,
      inputDesc: desc,
    }))
  }
  modalToggler = () => {
    this.setState(({ modalVisible }) => ({ modalVisible: !modalVisible }))
  }
  render() {
    const {
      container, sectionTitle, modalTitle, nameLabel, lableAsterisk,
      nameInputStyle, phoneLabel, phoneInputStyle, descLable,
      descInputStyle,
    } = styles
    const { inputName, inputPhone, inputDesc } = this.state
    return (
      <View style={container}>
        <Modal
          isVisible={this.state.modalVisible}
          style={{ flex: 1, alignItems: 'center' }}
        >
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={this.modalToggler}
          >
            <View >
              <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
                {'X'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1000, height: 350 }}>
            <Text style={modalTitle}>
              {'NEW STAFF'}
            </Text>
            <LineBreaker color="white" />
            <View style={{ flex: 1, paddingTop: 10, marginTop: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={nameLabel}>
                  {'Name'}
                </Text>
                <Text style={lableAsterisk}>
                  {'*'}
                </Text>
                <TextInput
                  underlineColorAndroid="rgba(0,0,0,0)"
                  value={inputName}
                  onChangeText={val => this.setState({ inputName: val })}
                  style={nameInputStyle}
                />
              </View>
              <View style={{ paddingTop: 30, flexDirection: 'row' }}>
                <Text style={phoneLabel}>
                  {'Phone'}
                </Text>
                <Text style={lableAsterisk}>
                  {'*'}
                </Text>
                <TextInput
                  underlineColorAndroid="rgba(0,0,0,0)"
                  value={inputPhone}
                  onChangeText={val => this.setState({ inputPhone: val })}
                  style={phoneInputStyle}
                />
              </View>
              <View style={{ paddingTop: 30, flexDirection: 'row' }}>
                <Text style={descLable}>
                  {'Description'}
                </Text>
                <TextInput
                  multiline
                  underlineColorAndroid="transparent"
                  value={inputDesc}
                  onChangeText={val => this.setState({ inputDesc: val })}
                  style={descInputStyle}
                />
              </View>
            </View>
            <LineBreaker style={{ marginTop: 10 }} color="white" />
          </View>
          <ModalButtons
            onSave={this.onSaveHandler}
            onCancel={this.modalToggler}
          />
        </Modal>
        <Text style={sectionTitle}>
          {'STAFFS'}
        </Text>
        <UserList
          modalToggler={this.modalToggler}
          onEdit={this.onEditStaff}
          onDelete={() => {}}
        />
      </View>
    )
  }
}
export default UserSetup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  modalTitle: {
    color: '#06A5A5',
    fontSize: 20,
    marginBottom: 15,
    marginTop: 10,
  },
  nameLabel: {
    paddingTop: 10,
    width: 60,
    height: 50,
    color: 'white',
    fontSize: 20,
  },
  lableAsterisk: {
    fontSize: 20,
    paddingTop: 10,
    color: 'red',
    marginRight: 60,
  },
  nameInputStyle: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderWidth: 2,
    borderColor: '#3F3C3E',
    color: 'white',
    fontSize: 20,
  },
  phoneLabel: {
    paddingTop: 10,
    width: 60,
    height: 50,
    color: 'white',
    fontSize: 20,
  },
  phoneInputStyle: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderWidth: 2,
    borderColor: '#3F3C3E',
    color: 'white',
    fontSize: 20,
  },
  descLable: {
    paddingTop: 30,
    width: 110,
    height: 100,
    color: 'white',
    fontSize: 20,
    marginRight: 20,
  },
  descInputStyle: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderWidth: 2,
    borderColor: '#3F3C3E',
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'top',
  },
  sectionTitle: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    fontSize: 20,
    color: '#06A5A5',
  },
})
