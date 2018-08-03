import actionFactory from '../../initializers/actionFactory';

export const GET_ACCESS_TOKEN_STARTED = 'GET_ACCESS_TOKEN_STARTED';
export const GET_ACCESS_TOKEN_SUCCEEDED = 'GET_ACCESS_TOKEN_SUCCEEDED';
export const GET_ACCESS_TOKEN_FAILED = 'GET_ACCESS_TOKEN_FAILED';

export const getAccessTokenStarted = actionFactory(GET_ACCESS_TOKEN_STARTED);
export const getAccessTokenSucceeded = actionFactory(GET_ACCESS_TOKEN_SUCCEEDED);
export const getAccessTokenFailed = actionFactory(GET_ACCESS_TOKEN_FAILED);
