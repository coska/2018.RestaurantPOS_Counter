import * as types from './actionTypes'

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

