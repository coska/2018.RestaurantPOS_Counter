import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import CoskaButton from '../components/CoskaButton'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getOrders } from '../store/home/actions'

class TableScreen extends React.Component {
  state = {
    total: 0,
    discount: 0,
    modalVisible: false,
    items: [{
      table: 1,
      name: 'Dummy1',
      qty: 2,
      price: 15,
    }, {
      table: 1,
      name: 'Dummy2',
      qty: 1,
      price: 13,
    }, {
      table: 2,
      name: 'Dummy3',
      qty: 3,
      price: 12,
    }],
    selectedItems: [],
  };
  setModalVisible(visible, tableNum) {
    this.state.total = 0
    this.state.discount = 0
    this.state.selectedItems = []
    this.state.items.filter(item => item.table === tableNum).forEach((element) => {
      this.state.total += (element.price * element.qty)
      this.state.selectedItems = this.state.selectedItems.concat(element)
      // console.log(this.state)
    })
    this.setState({ modalVisible: visible })
  }
  // screenSwitcher = (screen) => {
  //   this.setState({ renderScreen: screen })
  // }

  componentWillMount() {
    this.props.getOrders()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Modal
          backDropOpacity={0.8}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <View style={{ margin: 5 }}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(false)
              }}
            >
              <Text style={{ fontSize: 25, textAlign: 'right' }}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <FlatList
                style={{ flex: 8 }}
                initialNumToRender={3}
                ListHeaderComponent={() => (
                  <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderColor: '#000',
                        backgroundColor: '#212121',
                        marginTop: 5,
                      }}
                  >
                    <View
                      style={{ flex: 5, margin: 1, justifyContent: 'center' }}
                    >
                      <Text style={[styles.tableLabel, { paddingLeft: 20 }]}>
                          Item
                      </Text>
                    </View>
                    <View
                      style={{
                          flex: 1,
                          margin: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                    >
                      <Text style={styles.tableLabel}>Qty</Text>
                    </View>
                    <View
                      style={{
                          flex: 2,
                          margin: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                    >
                      <Text style={styles.tableLabel}>Unit</Text>
                      <Text style={styles.tableLabel}>Price</Text>
                    </View>
                    <View
                      style={{
                          flex: 2,
                          margin: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                    >
                      <Text style={styles.tableLabel}>Amount</Text>
                    </View>
                  </View>
                  )}
                data={this.state.selectedItems}
                numColumns={1}
                renderItem={({ item }) => (
                  <View style={[styles.tableRow, { backgroundColor: '#000' }]}>
                    <View style={{ flex: 3.5, marginHorizontal: 1 }}>
                      <Text style={{ color: '#fff', fontSize: 18 }}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                          flex: 1.5,
                          marginHorizontal: 1,
                          flexDirection: 'row',
                        }}
                    />
                    <View style={{ flex: 1, marginHorizontal: 1 }}>
                      <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 18,
                          }}
                      >
                        {item.qty}
                      </Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 1 }}>
                      <Text
                        style={{
                            color: '#fff',
                            textAlign: 'right',
                            fontSize: 18,
                          }}
                      >
                        {item.price.toFixed(2)}
                      </Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 1 }}>
                      <Text
                        style={{
                            color: '#fff',
                            textAlign: 'right',
                            fontSize: 18,
                          }}
                      >
                        {(item.qty * item.price).toFixed(2)}
                      </Text>
                    </View>
                  </View>
                  )}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => (
                  <View style={{ backgroundColor: '#212121' }}>
                    <View style={styles.tableRow}>
                      <View style={{ flex: 2, marginHorizontal: 1 }}>
                        <Text style={styles.tableLabel}>Subtotal:</Text>
                      </View>
                      <View
                        style={{
                            flex: 1,
                            marginHorizontal: 1,
                            alignItems: 'flex-end',
                          }}
                      >
                        <Text style={styles.tableLabel}>
                          {this.state.total.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={{ flex: 2, marginHorizontal: 1 }}>
                        <Text style={styles.tableLabel}>Discount:</Text>
                      </View>
                      <View
                        style={{
                            flex: 1,
                            marginHorizontal: 1,
                            alignItems: 'flex-end',
                          }}
                      >
                        <Text style={styles.tableLabel}>
                          {this.state.discount.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={{ flex: 2, marginHorizontal: 1 }}>
                        <Text style={styles.tableLabel}>Tax:</Text>
                      </View>
                      <View
                        style={{
                            flex: 1,
                            marginHorizontal: 1,
                            alignItems: 'flex-end',
                          }}
                      >
                        <Text style={styles.tableLabel}>
                          {(this.state.total * 0.13).toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  )}
              />
              <View
                style={{
                  alignItems: 'flex-end',
                  borderBottomColor: '#3d4040',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor: '#000',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 'bold',
                    marginBottom: 30,
                  }}
                >
                  {(this.state.total * 1.13 - this.state.discount).toFixed(2)}
                </Text>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <View style={styles.main}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#54585f', fontSize: 20 }}>IN-EAT</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              numColumns={4}
              renderItem={({ item, index }) => (
                <CoskaButton
                  key={index}
                  label={item}
                  onPress={() => {
                    this.setModalVisible(true, item)
                  }}
                  {...this.props}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#54585f', fontSize: 20 }}>TAKE OUT</Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              numColumns={4}
              renderItem={({ item, index }) => (
                <CoskaButton
                  key={index}
                  label={item}
                  onPress={() => { this.setModalVisible(true, item) }}
                  {...this.props}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </View>
        <Footer navigate={this.props.navigation.navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    justifyContent: 'space-between',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#3d4040',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tableLabel: {
    color: '#787878',
    fontSize: 18,
    fontWeight: '100',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  status: {
    flexDirection: 'row',
  },
  textInputS: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#09736f',
  },
})

const mapStateToProps = state => {
  return {
    orders: state.home.orders
  };
};

export default connect(
  mapStateToProps,
  { getOrders }
)(TableScreen);
