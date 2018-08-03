import {
  showSnackbar as show,
  hideSnackbar as hide,
} from '../actions/snackbarActions';

export function showSnackbar(options) {
  return (dispatch) => {
    dispatch(show(options));
  };
}

export function hideSnackbar() {
  return (dispatch) => {
    dispatch(hide());
  };
}
