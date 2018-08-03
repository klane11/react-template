import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';

import authentication from '../redux/reducers/authenticationReducer';
import navigation from '../redux/reducers/navigationReducer';
import snackbar from '../redux/reducers/snackbarReducer';
import user from '../redux/reducers/userReducer';


const reducer = combineReducers({
  authentication,
  navigation,
  snackbar,
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
