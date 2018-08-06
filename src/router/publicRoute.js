import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class PublicRoute extends React.Component {
  render() {
    return (
      <Route
        path={this.props.path}
        render={props => (
          localStorage.getItem('is_logged_in') ?
            <Redirect to='/home' />
          :
            <this.props.component {...props} />
        )}
      />
    );
  }
}

PublicRoute.propTypes = {
  path: PropTypes.string,
};

export default PublicRoute;
