import * as types from './actionTypes'

const initialState = {
  name: '',
  orders: [],
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_NAME: {
      return Object.assign({}, state, {
        name: action.name,
      })
    }
    case types.GET_ORDERS_SUCCESS: {
      return Object.assign({}, state, {
        orders: action.orders,
      })
    }
    case types.GET_ORDERS_FAIL: {
      console.log('GET_ORDERS_FAIL: ', action)
      return Object.assign({}, state, {
        error: action,
      })
    }
    default:
      return state
  }
}
