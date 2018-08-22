import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import CoskaButton from '../components/CoskaButton'
import Reducer from '../store/home/reducer';


class TableSetup extends React.Component {
  state = {
    tableNo:[1,2,3,4,5,6,7,8]
  }
  render() {
    const { tableNo } = this.state
    return (
      <View style={styles.main}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>IN-EAT</Text>
                    <FlatList
                      data={tableNo}
                      renderItem={({ item, index }) => (
                        <View style={{flex:10, flexDirection:'row'}}>  
                          <View style={{flex:9}}>  
                        <CoskaButton 
                          key={index}
                          label={item} 
                        />
                        </View>
                        <View style={{
                          backgroundColor: '#225447',
                          margin:5,
                          paddingVertical: 20,
                          paddingHorizontal: 20,
                          alignItems: 'center' , 
                        }}> 
                        <TouchableHighlight 
                          onPress={() => { 
                            tableNo.splice(tableNo.length-1,1);
                            this.setState({tableNo}); 
                          }}  
                        >
                          <Text style={{ color: 'white' ,fontSize: 15, textAlign: 'right' }}>Delete</Text>
                        </TouchableHighlight> 
                        </View>  
                        </View>

                      )}
                      keyExtractor={(_, index) => index.toString()}
                    />
                    <CoskaButton
                      key='add'
                      label='Add Table'
                      onPress={() => {
                        tableNo[tableNo.length]=tableNo.length+1;
                        this.setState({tableNo}); 
                      }} 
                    />
                  </View> 
                </View> 
    )
  } 
}
export default TableSetup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
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
  exitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#505251',
  },
})
