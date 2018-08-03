import update from 'immutability-helper';
import reducerFactory from '../../initializers/reducerFactory';
import {
  GET_USERS_STARTED,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
  UPDATE_USER_STARTED,
  UPDATE_USER_SUCCEEDED,
  UPDATE_USER_FAILED,
  DELETE_USER_STARTED,
  DELETE_USER_SUCCEEDED,
  DELETE_USER_FAILED,
  UPDATE_USER_STORE,
} from '../actions/userActions';

const INITIAL_STATE = {
  errorMessage: '',
  isLoading: false,
  userList: [],
  userFirstName: '',
  userLastName: '',
  userEmail: '',
  userId: 0,
  userTempPasswordConsumed: false,
  userProfileErrorMessage: '',
  userPasswordErrorMessage: '',
};


function onGetUsersStarted(state) {
  return update(state, {
    $merge: {
      isLoading: true,
      errorMessage: '',
    },
  });
}
function onGetUsersSucceeded(state, response) {
  return update(state, {
    $merge: {
      isLoading: false,
      userList: response.data,
    },
  });
}
function onGetUsersFailed(state) {
  return update(state, {
    $merge: {
      isLoading: false,
      errorMessage: 'Get users failed',
    },
  });
}


function onUpdateUserStarted(state) {
  return update(state, {
    $merge: {
      isLoading: true,
      errorMessage: '',
    },
  });
}
function onUpdateUserSucceeded(state) {
  return update(state, {
    $merge: {
      isLoading: false,
    },
  });
}
function onUpdateUserFailed(state) {
  return update(state, {
    $merge: {
      isLoading: false,
      errorMessage: 'Update user failed',
    },
  });
}

function onDeleteUserStarted(state) {
  return update(state, {
    $merge: {
      isLoading: true,
      errorMessage: '',
    },
  });
}
function onDeleteUserSucceeded(state) {
  return update(state, {
    $merge: {
      isLoading: false,
    },
  });
}
function onDeleteUserFailed(state) {
  return update(state, {
    $merge: {
      isLoading: false,
      errorMessage: 'Delete user failed',
    },
  });
}

function onUpdateUserStore(state, data) {
  const key = Object.keys(data.data)[0];
  return update(state, {
    $merge: {
      [key]: data.data[key],
    },
  });
}

const functionMap = {
  [GET_USERS_STARTED]: onGetUsersStarted,
  [GET_USERS_SUCCEEDED]: onGetUsersSucceeded,
  [GET_USERS_FAILED]: onGetUsersFailed,

  [UPDATE_USER_STARTED]: onUpdateUserStarted,
  [UPDATE_USER_SUCCEEDED]: onUpdateUserSucceeded,
  [UPDATE_USER_FAILED]: onUpdateUserFailed,

  [DELETE_USER_STARTED]: onDeleteUserStarted,
  [DELETE_USER_SUCCEEDED]: onDeleteUserSucceeded,
  [DELETE_USER_FAILED]: onDeleteUserFailed,

  [UPDATE_USER_STORE]: onUpdateUserStore,
};

export default reducerFactory(functionMap, INITIAL_STATE, 'user');
