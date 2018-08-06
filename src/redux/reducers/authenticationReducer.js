import update from 'immutability-helper';
import reducerFactory from '../../initializers/reducerFactory';
import {
  LOGIN_STARTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_STARTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  ON_UPDATE_AUTHENTICATION_STORE,
} from '../actions/authenticationActions';
import errorHandler from '../../utilities/errorHandler';

const INITIAL_STATE = {
  errorMessage: '',
  isLoading: false,
  isAuthenticated: false,
  userId: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  signInError: '',
};


function onLoginStarted(state) {
  return update(state, {
    $merge: {
      isLoading: true,
      errorMessage: '',
    },
  });
}
function onLoginSucceeded(state, response) {
  const { data } = response.data.data;
  return update(state, {
    $merge: {
      isLoading: false,
      isAuthenticated: true,
      userId: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
    },
  });
}
function onLoginFailed(state, error) {
  const errorMessage = errorHandler(error.data.status);
  return update(state, {
    $merge: {
      isLoading: false,
      errorMessage,
    },
  });
}


function onLogoutStarted(state) {
  return update(state, {
    $merge: {
      isLoading: true,
      errorMessage: '',
    },
  });
}
function onLogoutSucceeded(state) {
  return update(state, {
    $merge: {
      isLoading: false,
      isAuthenticated: false,
    },
  });
}
function onLogoutFailed(state) {
  return update(state, {
    $merge: {
      isLoading: false,
      errorMessage: 'Logout failed',
    },
  });
}

function onUpdateAuthenticationStore(state, data) {
  const key = Object.keys(data.data)[0];
  return update(state, {
    $merge: {
      [key]: data.data[key],
    },
  });
}



const functionMap = {
  [LOGIN_STARTED]: onLoginStarted,
  [LOGIN_SUCCEEDED]: onLoginSucceeded,
  [LOGIN_FAILED]: onLoginFailed,

  [LOGOUT_STARTED]: onLogoutStarted,
  [LOGOUT_SUCCEEDED]: onLogoutSucceeded,
  [LOGOUT_FAILED]: onLogoutFailed,

  [ON_UPDATE_AUTHENTICATION_STORE]: onUpdateAuthenticationStore,
};

export default reducerFactory(functionMap, INITIAL_STATE, 'authentication');
