import React from 'react';
import PropTypes from 'prop-types';

import { FormControl } from '@material-ui/core/Form';
import Input, { InputLabel } from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';


const styles = {
  textFieldInput: {
    margin: 0,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    border: '1px solid #ced4da',
    padding: 5,
    fontSize: 16,
  },
};


const BubbleSelectFormField = props => {
  return (
  <Grid item xs={props.xs} sm={props.sm} md={props.md}>
    <Grid
      container
      direction='row'
      justify='flex-start'
    >
      <FormControl margin='none' fullWidth>

        <InputLabel
          required={props.required}
          htmlFor={props.id}>
          {props.label}
        </InputLabel>

        <Select
          disableUnderline={true}
          style={styles.textFieldInput}
          disabled={props.disabled}
          multiple={props.multiple}
          value={props.value}
          onChange={props.onChange}
          input={<Input name={props.name} id={props.id} />}>
          {props.menuList}
        </Select>

      </FormControl>
    </Grid>
  </Grid>);
};

BubbleSelectFormField.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  style: PropTypes.object,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  menuList: PropTypes.any,
  multiple: PropTypes.bool,
};

export default (BubbleSelectFormField);
