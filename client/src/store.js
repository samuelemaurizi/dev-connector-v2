import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Initialize the State as a empty object
const initialState = {};
// Create middlewares array with Thunk (what is thunk?)
const middleware = [thunk];
// Create Store passing the Reducer that we will create, the initial state and a punch of funcs that comes from Redux packages
// Need more infos about createStore func
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
