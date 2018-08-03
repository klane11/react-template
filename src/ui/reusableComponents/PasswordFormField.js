import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Input, { InputLabel, InputAdornment } from '@material-ui/core/Input';
import { FormControl, FormHelperText } from '@material-ui/core/Form';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Visibility from 'material-ui-icons/Visibility';


class PasswordFormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <Grid
        item
        xs={this.props.xs}
      >
        <Grid
          container
          spacing={0}
          justify='flex-start'
          alignItems='flex-start'
        >
          <FormControl 
            margin='normal'
            fullWidth
            disabled={this.props.disabled}
          >
            <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
            <Input
              type={this.state.showPassword ? 'text' : 'password'}
              { ...this.props }
              endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={this.handleClickShowPasssword}
                  onMouseDown={this.handleMouseDownPassword}>
                  {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>}
            />
          </FormControl>

          <FormHelperText>
            {this.props.helpertext}
          </FormHelperText>

        </Grid>
      </Grid>
    );
  }
}


PasswordFormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  helpertext: PropTypes.string,
  value: PropTypes.string,
  xs: PropTypes.number,
  handleChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default PasswordFormField;
