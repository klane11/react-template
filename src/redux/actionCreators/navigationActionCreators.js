import {
  onLocationChanged,
} from '../actions/navigationActions';

export default function locationChanged(location) {
  return (dispatch) => {
    dispatch(onLocationChanged(location));
  };
}
