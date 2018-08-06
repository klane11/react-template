import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';

import Constants from '../../initializers/constants';
import BubbleFormField from '../reusableComponents/BubbleFormField';


const styles = {
  container: {
    marginTop: '20%',
    boxShadow: '0px 0px 5px 2px rgba(50, 50, 50, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 7,
    padding: 20,
  },
  errorMessage: {
    height: 20,
    color: 'red',
  },
  buttonContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  button: {
    padding: '10px 15px',
    border: `1.5px solid ${Constants.COLORS.PURPLE}`,
    color: Constants.COLORS.PURPLE,
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 10,
  },
};


class LoginForm extends Component {
  render() {
    return (
      <Grid item xs={11} sm={8} md={5} lg={4} style={styles.container}>

        <Grid>
          <BubbleFormField
            label='Email'
            value={this.props.email}
            onChange={this.props.handleChange('email')}
          />
          <BubbleFormField
            label='Password'
            type='password'
            value={this.props.password}
            onChange={this.props.handleChange('password')}
          />
          <Typography style={styles.errorMessage}>
            {this.props.signInError || this.props.validateError}
          </Typography>
        </Grid>

        <Grid
          container
          justify='flex-end'
          alignItems='center'
          style={styles.buttonContainer}
        >
          <Button
            style={styles.button}
            onClick={this.props.handleSignIn}
          >
            Sign In
          </Button>
        </Grid>

      </Grid>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object,
  handleForgotPasswordDialog: PropTypes.func,
  handleSignIn: PropTypes.func,
  handleChange: PropTypes.func,
  validateError: PropTypes.string,
  signInError: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

const component = withStyles(styles)(LoginForm);
export default (component);
