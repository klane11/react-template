import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Regex from '../../utilities/regex';
import getAccessToken from '../../redux/actionCreators/accessTokensActionCreators';
import { login } from '../../redux/actionCreators/authenticationActionCreators';
import SignInForm from '../components/SignInForm';


const styles = {
  background: {
    minHeight: '100%',
    minWidth: '100%',
    background: 'linear-gradient(125deg, #35d0bc 0%, #1a4ab2 100%)',
  },
  login: {
    boxShadow: '0px 0px 5px 2px rgba(50, 50, 50, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
    padding: 20,
  },
  logoContainer: {
    marginTop: '7%',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 75,
  },
  grayscale: {
    color: '#fff',
    marginLeft: 20,
  },
  signinTitle: {
    marginTop: 30,
    marginBottom: 30,
  },
};


class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
    openForgotPasswordDialog: false,
    signInError: '',
  }
  componentDidMount = () => {
    if (!localStorage.getItem('access_token')) {
      this.props.onLoginMounted();
    }
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

  handleForgotPasswordDialog = () => {
    this.setState({ openForgotPasswordDialog: !this.state.openForgotPasswordDialog });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Grid
          container
          justify='center'
          spacing={0}
          onKeyPress={this.handleKeyEnterPress}
        >
          <Grid item xs={12} className={classes.logoContainer}>
            <img src='' alt='Logo' className={classes.logo}/>
          </Grid>

          <Grid item xs={11} sm={8} md={5} lg={4} className={classes.login}>

            <SignInForm
              state={this.state}
              handleChange={this.handleChange}
              handleForgotPasswordDialog={this.handleForgotPasswordDialog}
              handleSignIn={this.handleSignIn}
              onKeyPress={this.handleKeyEnterPress}
            />

          </Grid>
        </Grid>
      </div>
    );
  }
}

SignInContainer.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.any,
  onLoginMounted: PropTypes.func,
  signIn: PropTypes.func,
  tempPasswordConsumed: PropTypes.bool,
};


const mapDispatchToProps = dispatch => ({
  onLoginMounted: () => dispatch(getAccessToken()),
  signIn: (params, history) => dispatch(login(params, history)),
});

const component = withStyles(styles)(SignInContainer);
export default withRouter(connect(null, mapDispatchToProps)(component));
