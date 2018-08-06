import { 
  getAccessTokenSucceeded, 
  getAccessTokenStarted, 
  getAccessTokenFailed 
} from '../actions/accessTokensActions';
import Instance from '../../initializers/axiosInstance';


function onGetAccessTokenStarted() {
  return (dispatch) => {
    dispatch(getAccessTokenStarted());
  };
}
function onGetAccessTokenSucceeded(response) {
  return (dispatch) => {
    dispatch(getAccessTokenSucceeded(response));
  };
}
function onGetAccessTokenFailed(error) {
  return (dispatch) => {
    dispatch(getAccessTokenFailed(error));
  };
}


export default function getAccessToken() {
  const headers = {
    'Content-Type': 'application/json',
    'X-Application-Key': process.env.REACT_APP_APPLICATION_KEY,
    'X-Application-Secret': process.env.REACT_APP_APPLICATION_SECRET,
  };

  return (dispatch) => {
    dispatch(onGetAccessTokenStarted());
    return Instance.axiosInstance().post('/access_token', {}, { headers })
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        dispatch(onGetAccessTokenSucceeded(response));
      })
      .catch((error) => {
        dispatch(onGetAccessTokenFailed(error));
        throw error;
      });
  };
}
