import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';


const SelectFormField = props => {
  return (
    <Select
      value={props.value}
      disabled={props.disabled}
      multiple={props.multiple}
      onChange={props.onChange}
      style={props.style}
      SelectDisplayProps={props.selectDisplayProps}
      disableUnderline={props.disableUnderline}
      autoWidth={props.autoWidth}
    >
      {props.menuList}
    </Select>
  );
};

SelectFormField.propTypes = {
  style: PropTypes.object,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  disableUnderline: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  menuList: PropTypes.any,
  multiple: PropTypes.bool,
  selectDisplayProps: PropTypes.object,
  autoWidth: PropTypes.bool,
};

export default (SelectFormField);
