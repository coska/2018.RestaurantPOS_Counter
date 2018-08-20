import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { getProducts } from '../store/menu/action'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuList from '../components/MenuList'
import MenuCategoryButtons from '../components/MenuCategoryButtons'
import ModalButtons from '../components/ModalButtons'

class MenuSetup extends React.Component {
  state = {
    isFetchingMore: false,
    modalVisible: false,
    category: 'main',
    itemName: '',
    itemPrice: '',
    itemDesc: '',
  }
  componentWillMount() {
    this.setState({ isFetchingMore: true })
    this.props.getProducts()
      .then(() => {
        this.setState({ isFetchingMore: false })
      })
  }
 onCategoryClick = clicked => this.setState({ category: clicked })

 onPriceChange = (input) => {
   this.setState({ itemPrice: Number.parseFloat(Number(input)).toString() })
 }
 modalToggler = () => {
   this.setState(({ modalVisible }) => ({
     modalVisible: !modalVisible,
     itemName: '',
     itemPrice: '',
     itemDesc: '',
   }))
 }
 render() {
   const {
     category, modalVisible, itemName, itemPrice, itemDesc,
   } = this.state
   const { products } = this.props
   const {
     container, modalContainer, modalFormContainer, modalTitle,
     imgButtonContainer, imgButton, lableAsterisk, lineBreaker,
     nameSection, itemNameLable, itemNameInput,
     priceSection, itemPriceLable, itemPriceInput,
     descSection, itemDescLable, itemDescInput,
   } = styles
   return (
     <View style={container}>
       <Header />
       <Modal isVisible={modalVisible} style={modalContainer}>
         <View style={modalFormContainer}>
           <View style={modalTitle}>
             <Text style={{ color: '#149898', fontSize: 20 }}>
               {'NEW MENU ITEM'}
             </Text>
           </View>
           <View style={lineBreaker} />
           <View style={imgButtonContainer}>
             <TouchableOpacity style={{ width: 400 }}>
               <View style={imgButton}>
                 <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#007771' }}>
                   {'+'}
                 </Text>
                 <Text style={{ fontSize: 30, color: '#007771' }}>
                   {'Add an Iamge'}
                 </Text>
               </View>
             </TouchableOpacity>
             <View style={{ flex: 1 }}>
               <View style={nameSection}>
                 <Text style={itemNameLable}>
                   {'Item Name'}
                 </Text>
                 <Text style={lableAsterisk}>
                   {'*'}
                 </Text>
                 <TextInput
                   underlineColorAndroid="rgba(0,0,0,0)"
                   value={itemName}
                   onChangeText={val => this.setState({ itemName: val })}
                   style={itemNameInput}
                 />
               </View>
               <View style={priceSection}>
                 <Text style={itemPriceLable}>
                   {'Price'}
                 </Text>
                 <Text style={lableAsterisk}>
                   {'*'}
                 </Text>
                 <TextInput
                   value={itemPrice}
                   onChange={this.onPriceChange}
                   underlineColorAndroid="rgba(0,0,0,0)"
                   style={itemPriceInput}
                 />
               </View>
               <View style={descSection}>
                 <Text style={itemDescLable}>
                   {'Description'}
                 </Text>
                 <TextInput
                   value={itemDesc}
                   onChangeText={val => this.setState({ itemDesc: val })}
                   multiline
                   underlineColorAndroid="rgba(0,0,0,0)"
                   style={itemDescInput}
                 />
               </View>
             </View>
           </View>
           <View style={lineBreaker} />
           <ModalButtons onSave={() => {}} onCancel={this.modalToggler} />
         </View>
       </Modal>
       <MenuCategoryButtons category={category} onPressButton={this.onCategoryClick} />
       <MenuList
         products={products}
         category={category}
         modalToggler={this.modalToggler}
       />
       <Footer navigate={this.props.navigation.navigate} />
     </View>
   )
 }
}
export default connect(state => ({
  products: state.menu.products,
}), { getProducts })(MenuSetup)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalFormContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  modalTitle: {
    marginTop: 10,
    marginLeft: 20,
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',

  },
  imgButtonContainer: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  imgButton: {
    height: 320,
    borderWidth: 3,
    borderColor: '#007771',
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    marginTop: 20,
    marginBottom: 20,

  },
  nameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    height: 70,
    marginLeft: 20,
  },
  lableAsterisk: {
    fontSize: 20,
    paddingTop: 10,
    color: 'red',
    marginRight: 60,
  },
  itemNameLable: {
    fontSize: 20,
    marginLeft: 10,
    paddingTop: 10,
    color: 'white',
  },
  itemNameInput: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 25,
    color: 'white',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    height: 70,
    marginLeft: 20,
  },
  itemPriceLable: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  itemPriceInput: {
    marginLeft: 52,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    color: 'white',
    fontSize: 25,
    paddingLeft: 20,

  },
  descSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    height: 120,
    marginLeft: 20,
  },
  itemDescLable: {
    marginLeft: 10,
    marginRight: 65,
    fontSize: 20,
    color: 'white',
  },
  itemDescInput: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    fontSize: 25,
    color: 'white',
    paddingLeft: 20,
  },
  lineBreaker: {
    height: 1,
    width: 1150,
    backgroundColor: 'white',
    marginTop: 10,
  },
})
