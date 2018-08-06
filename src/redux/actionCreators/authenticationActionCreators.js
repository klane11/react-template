import {
  loginStarted,
  loginSucceeded,
  loginFailed,
  logoutStarted,
  logoutSucceeded,
  logoutFailed,
  onUpdateAuthenticationStore,
} from '../actions/authenticationActions';
import Instance from '../../initializers/axiosInstance';


function onLoginStarted() {
  return (dispatch) => {
    dispatch(loginStarted());
  };
}
function onLoginSucceeded(response) {
  return (dispatch) => {
    dispatch(loginSucceeded(response));
  };
}
function onLoginFailed(error) {
  return (dispatch) => {
    dispatch(loginFailed(error));
  };
}


function onLogoutStarted() {
  return (dispatch) => {
    dispatch(logoutStarted());
  };
}
function onLogoutSucceeded(response) {
  return (dispatch) => {
    dispatch(logoutSucceeded(response));
  };
}
function onLogoutFailed(error) {
  return (dispatch) => {
    dispatch(logoutFailed(error));
  };
}


export function login(email, password) {
  const data = {
    email,
    password,
  };
  return (dispatch) => {
    dispatch(onLoginStarted());
    return Instance.axiosInstance().post('/login', data)
      .then((response) => {
        dispatch(onLoginSucceeded(response));
        return response;
      })
      .catch((error) => {
        dispatch(onLoginFailed(error.response.data));
        throw error;
      });
  };
}


export function logout() {
  return (dispatch) => {
    dispatch(onLogoutStarted());
    return Instance.axiosInstance().post('/logout', { access_token: '' })
      .then((response) => {
        dispatch(onLogoutSucceeded(response));
        return response;
      })
      .catch((error) => {
        dispatch(onLogoutFailed(error));
        throw error;
      });
  };
}


export function updateAuthenticationRedux(name, value) {
  const data = {};
  data[name] = value;
  return (dispatch) => {
    dispatch(onUpdateAuthenticationStore(data));
  };
}