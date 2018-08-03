import update from 'immutability-helper';
import reducerFactory from '../../initializers/reducerFactory';

import { LOCATION_CHANGED } from '../actions/navigationActions';

const INITIAL_STATE = {
  currentLocation: window.location,
};

function onLocationChanged(state, action) {
  return update(state, {
    $merge: {
      currentLocation: action.data,
    },
  });
}

const functionMap = {
  [LOCATION_CHANGED]: onLocationChanged,
};

export default reducerFactory(functionMap, INITIAL_STATE, 'navigation');
