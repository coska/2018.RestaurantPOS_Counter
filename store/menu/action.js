import * as types from './actionTypes'
import CounterService from '../../Services/CounterService'

export const getProducts = () => async (dispatch, getState) => {
  try {
    const products = await CounterService.getProducts()
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, products })
    return products
  } catch (response) {
    dispatch({ type: types.GET_PRODUCTS_FAIL, ...response })
    throw new Error(response)
  }
}
