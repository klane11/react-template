import {
  getUsersStarted,
  getUsersSucceeded,
  getUsersFailed,
  updateUserStarted,
  updateUserSucceeded,
  updateUserFailed,
  deleteUserStarted,
  deleteUserSucceeded,
  deleteUserFailed,
  updateUserStore,
} from '../actions/userActions';
import Instance from '../../initializers/axiosInstance';


function onGetUsersStarted() {
  return (dispatch) => {
    dispatch(getUsersStarted());
  };
}
function onGetUsersSucceeded(response) {
  return (dispatch) => {
    dispatch(getUsersSucceeded(response));
  };
}
function onGetUsersFailed(error) {
  return (dispatch) => {
    dispatch(getUsersFailed(error));
  };
}


function onUpdateUserStarted() {
  return (dispatch) => {
    dispatch(updateUserStarted());
  };
}
function onUpdateUserSucceeded(response) {
  return (dispatch) => {
    dispatch(updateUserSucceeded(response));
  };
}
function onUpdateUserFailed(error) {
  return (dispatch) => {
    dispatch(updateUserFailed(error));
  };
}


function onDeleteUserStarted() {
  return (dispatch) => {
    dispatch(deleteUserStarted());
  };
}
function onDeleteUserSucceeded(response) {
  return (dispatch) => {
    dispatch(deleteUserSucceeded(response));
  };
}
function onDeleteUserFailed(error) {
  return (dispatch) => {
    dispatch(deleteUserFailed(error));
  };
}

function onUpdateUserStore(params) {
  return (dispatch) => {
    dispatch(updateUserStore(params));
  };
}

export function getUsers() {
  return (dispatch) => {
    dispatch(onGetUsersStarted());
    return Instance.axiosInstance().get('/users')
      .then((response) => {
        dispatch(onGetUsersSucceeded(response.data.data));
        return response.data.data;
      }).catch((error) => {
        dispatch(onGetUsersFailed(error));
      });
  };
}


export function updateUser(params) {
  const data = {
    first_name: params.firstName,
    last_name: params.lastName,
    email: params.email,
  };
  const id = params.userId;
  return (dispatch) => {
    dispatch(onUpdateUserStarted());
    return Instance.axiosInstance().put(`/users/${id}`, data)
      .then((response) => {
        dispatch(onUpdateUserSucceeded(response));
      }).catch((error) => {
        dispatch(onUpdateUserFailed(error));
        throw error;
      });
  };
}


export function deleteUser(id) {
  return (dispatch) => {
    dispatch(onDeleteUserStarted());
    Instance.axiosInstance().delete(`/users/${id}`)
      .then((response) => {
        dispatch(onDeleteUserSucceeded(response));
      }).catch((error) => {
        dispatch(onDeleteUserFailed(error));
      });
  };
}

export function updateUserRedux(name, value) {
  const data = {};
  data[name] = value;
  return (dispatch) => {
    dispatch(onUpdateUserStore(data));
  };
}
