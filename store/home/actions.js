import * as types from './actionTypes'
import CounterService from '../../Services/CounterService';

export const getOrders = () => async (dispatch) => {
  try {
    const orders = await CounterService.getOrders()
    dispatch({ type: types.GET_ORDERS_SUCCESS, orders })
    return orders
  } catch (response) {
    dispatch({ type: types.GET_ORDERS_FAIL, ...response })
    throw new Error(response)
  }
}

export const setName = name => (dispatch) => {
  dispatch({ type: types.SET_NAME, name })
}

export const addStaff = staffInfo => (dispatch) => {
  // Add API call
  dispatch({ type: types.ADD_STAFF, staffInfo /* return with allStaffs */ })
}

export const getAllStaffs = () => (dispatch) => {
  // Add API call
  dispatch({ type: types.GET_ALL_STAFFS /* return data from api call */ })
}

export const updateStaff = staffInfo => (dispatch) => {
  // Add API call
  dispatch({ type: types.UPDATE_STAFF, staffInfo })
}

export const deleteStaff = staffName => (dispatch) => {
  // Add API call
  dispatch({ type: types.DELETE_STAFF, staffName })
}

