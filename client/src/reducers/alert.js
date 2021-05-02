import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// Functions in action folder will dispatch an action to the reducer and it will add the payload to the state that it starts as an empty array
const initialState = [];

function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default alertReducer;
