import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Regex from '../../utilities/regex';
import LoginForm from '../components/LoginForm';


const styles = {
  background: {
    minHeight: '100%',
    minWidth: '100%',
    background: '#f9f5f8',
  },
  login: {
    boxShadow: '0px 0px 5px 2px rgba(50, 50, 50, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
    padding: 20,
  },
};


class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
    signInError: '',
  }
  handleSignIn = () => {
    if (!this.validateAndHandleError()) {
      const params = {
        password: this.state.password,
        email: this.state.email,
      };
      this.signInUser(params);
    }
  }

  signInUser = async (params) => {
    const { history, signIn } = this.props;
    await signIn(params, history);
    history.push('/analytics');
  }

  validateAndHandleError = () => {
    let errorMessage;
    if (!Regex.isEmail(this.state.email)) {
      errorMessage = 'Please enter a valid email address';
    }
    if (this.state.email === '' || this.state.password === '') {
      errorMessage = 'All fields must be filled out';
    }
    this.setState({ signInError: errorMessage });
    return errorMessage;
  }

  handleKeyEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSignIn();
    }
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Grid
          container
          spacing={0}
          justify='center'
          onKeyPress={this.handleKeyEnterPress}
        >

          <Grid item xs={11} sm={8} md={5} lg={4} className={classes.login}>

            <LoginForm
              state={this.state}
              handleChange={this.handleChange}
              handleSignIn={this.handleSignIn}
              onKeyPress={this.handleKeyEnterPress}
              handleForgotPasswordDialog={this.handleForgotPasswordDialog}
            />

          </Grid>
        </Grid>
      </div>
    );
  }
}

SignInContainer.propTypes = {
  classes: PropTypes.object,
};


const component = withStyles(styles)(SignInContainer);
export default (component);
