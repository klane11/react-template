import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';

import Constants from '../../initializers/constants';
import BubbleFormField from '../reusableComponents/BubbleFormField';


const styles = {
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
    borderRadius: 5,
  },
};


class LoginForm extends Component {
  render() {
    return (
      <Grid>

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
          spacing={0}
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
