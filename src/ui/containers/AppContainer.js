import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '../../router/routes';
import CSS from '../../styles/App.css';

import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import locationChanged from '../../redux/actionCreators/navigationActionCreators';
import { showSnackbar, hideSnackbar } from '../../redux/actionCreators/snackbarActionCreators';


const styles = {
  appContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}


class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.props.history.listen((location) => {
      this.props.onLocationChanged(location);
    });
  }

  render() {
    return (
      <Grid style={styles.appContainer}>
        {Routes}
        <Snackbar
          autoHideDuration={4000}
          onClose={this.props.hideSnackbar}
          message={this.props.snackbarMessage}
          open={Boolean(this.props.snackbarMessage)}
          anchorOrigin={this.props.snackbarAnchorOrigin}
          SnackbarContentProps={this.props.snackbarContentProps}
        />
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
