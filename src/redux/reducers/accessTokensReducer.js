import update from 'immutability-helper';
import reducerFactory from '../../initializers/reducerFactory';

import {
  GET_ACCESS_TOKEN_STARTED,
  GET_ACCESS_TOKEN_SUCCEEDED,
  GET_ACCESS_TOKEN_FAILED,
} from '../actions/accessTokensActions';

const INITIAL_STATE = {
  guid: null,
  isDownload: false,
  isAuthticated: false,
};


function onGetAccessTokenStarted(state) {
  return update(state, {
    $merge: {
      isDownload: true,
      guid: null,
    },
  });
}
function onGetAccessTokenSucceeded(state, response) {
  const { data } = response.data;
  return update(state, {
    $merge: {
      isDownload: false,
      guid: data.access_token,
    },
  });
}
function onGetAccessTokenFailed(state) {
  return update(state, {
    $merge: {
      isDownload: false,
    },
  });
}


const functionMap = {
  [GET_ACCESS_TOKEN_STARTED]: onGetAccessTokenStarted,
  [GET_ACCESS_TOKEN_SUCCEEDED]: onGetAccessTokenSucceeded,
  [GET_ACCESS_TOKEN_FAILED]: onGetAccessTokenFailed,
};

export default reducerFactory(functionMap, INITIAL_STATE, 'accessToken');
