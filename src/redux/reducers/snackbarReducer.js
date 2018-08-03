import reducerFactory from '../../initializers/reducerFactory';

import {
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} from '../actions/snackbarActions';

const INITIAL_STATE = {
  snackbarMessage: null,
  snackbarContentProps: {
    style: { textAlign: 'center' },
  },
  snackbarAnchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  snackbarAutoHideDuration: 4000,
};

const onShowSnackbar = (state, options = {}) => {
  const data = options.data || {};
  return {
    ...state,
    snackbarMessage: data.snackbarMessage || state.snackbarMessage,
    snackbarContentProps: data.snackbarContentProps || state.snackbarContentProps,
    snackbarAnchorOrigin: data.snackbarAnchorOrigin || state.snackbarAnchorOrigin,
    snackbarAutoHideDuration: data.snackbarAutoHideDuration || state.snackbarAutoHideDuration,
  };
};

const onHideSnackbar = (state, options) => {
  return INITIAL_STATE;
};

const functionMap = {
  [SHOW_SNACKBAR]: onShowSnackbar,
  [HIDE_SNACKBAR]: onHideSnackbar,
};

export default reducerFactory(functionMap, INITIAL_STATE, 'snackbar');
