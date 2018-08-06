import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = {
  background: {
    minHeight: '100%',
    minWidth: '100%',
    background: '#f9f5f8',
  },
};


class HomeContainer extends Component {
  render() {
    return (
      <Grid 
        container 
        spacing={0} 
        justify='center'
        alignItems='center'
        style={styles.background}
      >
        <Typography variant='display4'>
          Welcome!!
        </Typography>
      </Grid>
    );
  }
}

HomeContainer.propTypes = {
  classes: PropTypes.object,
};

const component = (HomeContainer);
export default (component);
