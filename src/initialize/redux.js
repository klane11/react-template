import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';

import user from '../redux/reducers/userReducer';


const reducer = combineReducers({
  user,
});

const initialState = {

};

const logger = store => next => (action) => {
  if (action.type !== undefined) {
    console.log(`${action.type} Pre-State:`, store.getState());
  }

  const result = next(action);

  if (action.type !== undefined) {
    console.log(`${action.type} Post-State:`, store.getState());
  }

  return result;
};

export default function createStore() {
  return createReduxStore(reducer, initialState, applyMiddleware(logger, thunk));
}
