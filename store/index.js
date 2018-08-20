import { combineReducers } from 'redux'
import home from './home/reducer'
import menu from './menu/reducer'

export default combineReducers({
  home,
  menu,
})
