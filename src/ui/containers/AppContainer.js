import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '../../router/routes';
import '../../styles/index.css';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import Snackbar from 'material-ui/Snackbar';

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

      </Grid>
    );
  }
}

AppContainer.propTypes = {

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

const component = withStyles(styles)(AppContainer);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
