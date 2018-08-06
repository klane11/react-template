import actionFactory from '../../initializers/actionFactory';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const ON_UPDATE_AUTHENTICATION_STORE = 'ON_UPDATE_AUTHENTICATION_STORE';


export const loginStarted = actionFactory(LOGIN_STARTED);
export const loginSucceeded = actionFactory(LOGIN_SUCCEEDED);
export const loginFailed = actionFactory(LOGIN_FAILED);

export const logoutStarted = actionFactory(LOGOUT_STARTED);
export const logoutSucceeded = actionFactory(LOGOUT_SUCCEEDED);
export const logoutFailed = actionFactory(LOGOUT_FAILED);

export const onUpdateAuthenticationStore = actionFactory(ON_UPDATE_AUTHENTICATION_STORE);