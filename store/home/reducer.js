
import * as types from './actionTypes';

const initialState = {
  name: ''
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_NAME: {
      return Object.assign({}, state, {
        name: action.name
      });
    }
    default:
      return state;
  }
}
