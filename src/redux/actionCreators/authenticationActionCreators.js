import {
  loginStarted,
  loginSucceeded,
  loginFailed,
  logoutStarted,
  logoutSucceeded,
  logoutFailed,
} from '../actions/authenticationActions';
import Instance from '../../initializers/axiosInstance';
import { setIsLoggedIn, clearLocalStorage, getSavedAccessToken, setUserInformation } from '../../utilities/localStorage';
import getAccessToken from '../actionCreators/accessTokensActionCreators';


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


export function login(params, history) {
  const data = {
    email: params.email,
    password: params.password,
  };
  return (dispatch) => {
    dispatch(onLoginStarted());
    return Instance.axiosInstance().post('/login', data)
      .then((response) => {
        setIsLoggedIn();
        setUserInformation(response.data.data);
        dispatch(onLoginSucceeded(response));
      })
      .catch((error) => {
        handleLoginErrors(error, dispatch, data, history);
        dispatch(onLoginFailed(error.response.data));
        throw error;
      });
  };
}

async function retreiveNewAccessTokenAndLogin(dispatch, data, history) {
  try {
    await dispatch(getAccessToken());
    await dispatch(login(data));
    history.push('/analytics');
  } catch (error) {
    throw error;
  }
}

function handleLoginErrors(error, dispatch, data, history) {
  if (error.response.data.status === 2000) {
    clearLocalStorage();
    dispatch(login(data, history));
  } else if (error.response.data.status === 2002) {
    retreiveNewAccessTokenAndLogin(dispatch, data, history);
  }
}


export function logout(history) {
  const accessToken = getSavedAccessToken();
  return (dispatch) => {
    dispatch(onLogoutStarted());
    return Instance.axiosInstance().post('/logout', { access_token: accessToken })
      .then((response) => {
        clearLocalStorage();
        dispatch(onLogoutSucceeded(response));
      })
      .catch((error) => {
        clearLocalStorage();
        dispatch(onLogoutFailed(error));
        history.push('/sign_in');
        throw error;
      });
  };
}
