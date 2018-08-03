import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField/TextField';


const styles = theme => ({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 8,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '12px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 20,
  },
});

class BubbleFormField extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid 
        item 
        xs={this.props.xs} 
        sm={this.props.sm} 
        md={this.props.md}
      >
        <Grid 
          container 
          spacing={0}
          direction='row' 
          justify='flex-start' 
          alignItems='flex-start' 
          className={classes.container}
        >
          <TextField
            fullWidth
            value={this.props.value}
            label={this.props.label}
            type={this.props.type}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.textFieldRoot,
                input: classes.textFieldInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.textFieldFormLabel,
            }}
          />

        </Grid>
      </Grid>
    );
  }
}


BubbleFormField.propTypes = {
  classes: PropTypes.object,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(BubbleFormField);
