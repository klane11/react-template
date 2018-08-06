import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    border: `1.5px solid ${Constants.COLORS.BRIGHT_BLUE}`,
    color: Constants.COLORS.BRIGHT_BLUE,
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 10,
  },
};

class LoginForm extends Component {
  render() {
    const { classes, state } = this.props;
    return (
      <Grid>

        <Grid>
          <BubbleFormField
            label='Email'
            value={state.email}
            onChange={this.props.handleChange('email')}
          />
          <BubbleFormField
            label='Password'
            type='password'
            value={state.password}
            onChange={this.props.handleChange('password')}
          />
          <Typography className={classes.errorMessage}>
            {state.signInError || this.props.errorMessage}
          </Typography>
        </Grid>

        <Grid
          container
          display='flex'
          justify='flex-end'
          alignItems='center'
          className={classes.buttonContainer}
        >
          <Button
            className={classes.button}
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
  state: PropTypes.object,
  handleForgotPasswordDialog: PropTypes.func,
  handleSignIn: PropTypes.func,
  handleChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
  errorMessage: state.authentication.errorMessage,
});

const component = withStyles(styles)(LoginForm);
export default connect(mapStateToProps, null)(component);
