import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, CircularProgress } from 'material-ui';


const styles = {
  scrollMessage: {
    textAlign: 'center',
    paddingTop: 10,
    height: 30,
  },
  progress: {
    paddingTop: 5,
    paddingBottom: 5,
  },
};


class InfiniteScrollContainer extends Component {
  render() {
    const {
      classes,
      dataLength,
      nextFunction,
      hasMore,
      height,
      items,
    } = this.props;

    const loader = (
      <Grid
        container
        spacing={0}
        justify='center'
      >
        <CircularProgress
          size={30}
          className={classes.progress}
        />
      </Grid>
    );

    const endMessage = (
      <Typography className={classes.scrollMessage}>
        End of Conversations
      </Typography>
    );

    const style = {
      overflow: 'scroll',
    };

    return (
      <InfiniteScroll
        dataLength={dataLength}
        next={() => nextFunction()}
        hasMore={hasMore}
        loader={loader}
        endMessage={endMessage}
        height={height}
        style={style}
      >
        {items}
      </InfiniteScroll>
    );
  }
}


InfiniteScrollContainer.propTypes = {
  classes: PropTypes.object,
  dataLength: PropTypes.number,
  nextFunction: PropTypes.func,
  hasMore: PropTypes.bool,
  height: PropTypes.string,
  items: PropTypes.object,
};


const component = withStyles(styles)(InfiniteScrollContainer);
export default (component);
