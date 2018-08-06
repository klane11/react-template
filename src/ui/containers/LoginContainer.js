import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Regex from '../../utilities/regex';
import { updateAuthenticationRedux } from '../../redux/actionCreators/authenticationActionCreators';
import LoginForm from '../components/LoginForm';


const styles = {
  background: {
    minHeight: '100%',
    minWidth: '100%',
    background: '#f9f5f8',
  },
};


class SignInContainer extends Component {
  handleSignIn = () => {
    if (!this.validateAndHandleError()) {
      const params = {
        password: this.props.password,
        email: this.props.email,
      };
      this.signInUser(params);
    }
  }

  signInUser = () => {
    const { history } = this.props;
    history.push('/home');
  }

  validateAndHandleError = () => {
    let errorMessage;
    if (!Regex.isEmail(this.props.email)) {
      errorMessage = 'Please enter a valid email address';
    }
    if (this.props.email === '' || this.props.password === '') {
      errorMessage = 'All fields must be filled out';
    }
    this.updateAuthStore('signInError', errorMessage);
    return errorMessage;
  }

  handleKeyEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSignIn();
    }
  }

  handleChange = name => (event) => {
    this.updateAuthStore([name], event.target.value);
  }

  updateAuthStore = (key, value) => {
    this.props.updateAuthenticationStore(key, value);
  }

  render() {
    const { classes, ...other } = this.props;
    return (
      <div className={classes.background}>
        <Grid
          container
          spacing={0}
          justify='center'
          onKeyPress={this.handleKeyEnterPress}
        >
          <LoginForm
            {...other}
            handleChange={this.handleChange}
            handleSignIn={this.handleSignIn}
            onKeyPress={this.handleKeyEnterPress}
            handleForgotPasswordDialog={this.handleForgotPasswordDialog}
          />
        </Grid>
      </div>
    );
  }
}

SignInContainer.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = ({ authentication }) => ({
  ...authentication
});

const mapDispatchToProps = (dispatch) => ({
  updateAuthenticationStore: (key, value) => dispatch(updateAuthenticationRedux(key, value)),
});

const component = withStyles(styles)(SignInContainer);
export default connect(mapStateToProps, mapDispatchToProps)(component);
