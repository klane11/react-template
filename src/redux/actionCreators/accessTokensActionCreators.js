import { getAccessTokenSucceeded, getAccessTokenStarted, getAccessTokenFailed } from '../actions/accessTokensActions';
import Instance from '../../initializers/axiosInstance';
import { setLocalStorageItem } from '../../utilities/localStorage';


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
    'X-Grayscale-Application-Secret': process.env.REACT_APP_GRAYSCALE_API_SECRET,
    'X-Grayscale-Application-Key': process.env.REACT_APP_GRAYSCALE_API_KEY,
  };

  return (dispatch) => {
    dispatch(onGetAccessTokenStarted());
    return Instance.axiosInstance().post('/access_tokens', {}, { headers })
      .then((response) => {
        setLocalStorageItem('access_token', response.data.access_token);
        dispatch(onGetAccessTokenSucceeded(response));
      })
      .catch((error) => {
        dispatch(onGetAccessTokenFailed(error));
        throw error;
      });
  };
}
