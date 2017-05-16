import { createStore, combineReducers } from 'redux';
import characterReducer from './reducers/characterReducer';


export default (initialState = {}) => (
  createStore(
    combineReducers({
      character: characterReducer
    }),
    initialState
  )
);
