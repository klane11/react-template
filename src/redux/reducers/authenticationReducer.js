import update from 'immutability-helper';
import reducerFactory from '../../initializers/reducerFactory';
import {
  LOGIN_STARTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_STARTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
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
  temp_password_consumed: false,
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
      tempPasswordConsumed: data.temp_password_consumed,
      companyId: data.company_id,
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


const functionMap = {
  [LOGIN_STARTED]: onLoginStarted,
  [LOGIN_SUCCEEDED]: onLoginSucceeded,
  [LOGIN_FAILED]: onLoginFailed,

  [LOGOUT_STARTED]: onLogoutStarted,
  [LOGOUT_SUCCEEDED]: onLogoutSucceeded,
  [LOGOUT_FAILED]: onLogoutFailed,
};

export default reducerFactory(functionMap, INITIAL_STATE, 'authentication');
