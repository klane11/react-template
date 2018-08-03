import actionFactory from '../../initializers/actionFactory';

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

export const showSnackbar = actionFactory(SHOW_SNACKBAR);
export const hideSnackbar = actionFactory(HIDE_SNACKBAR);
