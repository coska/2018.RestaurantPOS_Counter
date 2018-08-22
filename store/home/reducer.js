import * as types from './actionTypes'

const initialState = {
  name: '',
  tableNo: [],
  renderScreen: '',
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
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_NAME: {
      return Object.assign({}, state, {
        name: action.name,
      })
    }
    default:
      return state
  }
}
