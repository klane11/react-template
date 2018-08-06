import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class AuthenticatedRoute extends React.Component {
  render() {
    return (
      <Route
        path={this.props.path}
        render={props => (
          !localStorage.getItem('is_logged_in') ?
            <Redirect to='/login' />
          :
            <this.props.component {...props} />
        )}
      />
    );
  }
}

AuthenticatedRoute.propTypes = {
  path: PropTypes.string,
};

export default connect()(AuthenticatedRoute);
