import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Regex from '../../utilities/regex';
import getAccessToken from '../../redux/actionCreators/accessTokensActionCreators';
import { updateAuthenticationRedux, login } from '../../redux/actionCreators/authenticationActionCreators';
import LoginForm from '../components/LoginForm';


const styles = {
  background: {
    minHeight: '100%',
    minWidth: '100%',
    background: '#f9f5f8',
  },
  loginForm: {
    marginTop: '15%',
    boxShadow: '0px 0px 5px 2px rgba(50, 50, 50, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 7,
    padding: 20,
  },
};


class LoginContainer extends Component {
  componentDidMount = () => {
    this.props.getAccessToken();
  }

  handleSignIn = () => {
    if (!this.validateAndHandleError()) {
      const params = {
        password: this.props.password,
        email: this.props.email,
      };
      this.signInUser(params);
    }
  }

  signInUser = async () => {
    try {
      const { history, email, password, loginUser } = this.props;
      await loginUser(email, password);
      localStorage.setItem('is_logged_in', true);
      history.push('/home');
    } catch (err) {
      throw err;
    }
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
          <Grid item xs={11} sm={8} md={5} lg={4} style={styles.loginForm}>
            <LoginForm
              {...other}
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

LoginContainer.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = ({ authentication }) => ({
  ...authentication
});

const mapDispatchToProps = (dispatch) => ({
  updateAuthenticationStore: (key, value) => dispatch(updateAuthenticationRedux(key, value)),
  loginUser: (email, password) => dispatch(login(email, password)),
  getAccessToken: () => dispatch(getAccessToken()),
});

const component = withStyles(styles)(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(component);
