import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '../../router/routes';

import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import locationChanged from '../../redux/actionCreators/navigationActionCreators';
import { showSnackbar, hideSnackbar } from '../../redux/actionCreators/snackbarActionCreators';


class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.props.history.listen((location) => {
      this.props.onLocationChanged(location);
    });
  }

  render() {
    return (
      <Grid>
        <div>
          {Routes}
          <Snackbar
            autoHideDuration={4000}
            open={Boolean(this.props.snackbarMessage)}
            anchorOrigin={this.props.snackbarAnchorOrigin}
            onClose={this.props.hideSnackbar}
            message={this.props.snackbarMessage}
            SnackbarContentProps={this.props.snackbarContentProps}
          />
        </div>
      </Grid>
    );
  }
}

AppContainer.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.any,
  onLocationChanged: PropTypes.func,
  snackbarMessage: PropTypes.string,
  hideSnackbar: PropTypes.func,
  snackbarContentProps: PropTypes.object,
  snackbarAnchorOrigin: PropTypes.object,
};

const mapStateToProps = ({ location, snackbar }) => ({
  ...location,
  ...snackbar,
});

const mapDispatchToProps = dispatch => ({
  onLocationChanged: location => dispatch(locationChanged(location)),
  showSnackbar: (options) => dispatch(showSnackbar(options)),
  hideSnackbar: () => dispatch(hideSnackbar()),
});

const component = (AppContainer);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
