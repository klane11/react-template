import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, FormHelperText } from '@material-ui/core/Form';
import Input, { InputLabel } from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';


const FormField = props => (
  <Grid 
    item 
    xs={props.xs}
    sm={props.sm}
    md={props.md}
  >
    <Grid 
      container
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
      style={props.style}
    >
      <FormControl
        fullWidth
        margin='normal'
        required={props.required}
        disabled={props.disabled}
      >
        <InputLabel { ... props } >
          { props.label }
        </InputLabel>
        <Input { ... props } />
      </FormControl>

      <FormHelperText
        onClick={props.onClick}
        className={props.className}
      >
        {props.helptext}
      </FormHelperText>

    </Grid>
  </Grid>
);


FormField.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.object,
  required: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  helptext: PropTypes.string,
  onClick: PropTypes.func,
};

export default FormField;
