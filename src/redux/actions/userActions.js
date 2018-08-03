import actionFactory from '../../initializers/actionFactory';

export const GET_USERS_STARTED = 'GET_USERS_STARTED';
export const GET_USERS_SUCCEEDED = 'GET_USERS_SUCCEEDED';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const UPDATE_USER_STARTED = 'UPDATE_USER_STARTED';
export const UPDATE_USER_SUCCEEDED = 'UPDATE_USER_SUCCEEDED';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const DELETE_USER_STARTED = 'DELETE_USER_STARTED';
export const DELETE_USER_SUCCEEDED = 'DELETE_USER_SUCCEEDED';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

export const UPDATE_USER_STORE = 'UPDATE_USER_STORE';


export const getUsersFailed = actionFactory(GET_USERS_FAILED);
export const getUsersStarted = actionFactory(GET_USERS_STARTED);
export const getUsersSucceeded = actionFactory(GET_USERS_SUCCEEDED);

export const updateUserStarted = actionFactory(UPDATE_USER_STARTED);
export const updateUserSucceeded = actionFactory(UPDATE_USER_SUCCEEDED);
export const updateUserFailed = actionFactory(UPDATE_USER_FAILED);

export const deleteUserStarted = actionFactory(DELETE_USER_STARTED);
export const deleteUserSucceeded = actionFactory(DELETE_USER_SUCCEEDED);
export const deleteUserFailed = actionFactory(DELETE_USER_FAILED);

export const updateUserStore = actionFactory(UPDATE_USER_STORE);
