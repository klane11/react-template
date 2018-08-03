import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


class GeneralDialog extends Component {
  handleClose = () => {
    this.props.handler();
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            {this.props.primaryContent}
          </DialogContentText>

          <DialogContentText>
            {this.props.secondaryContent}
          </DialogContentText>

        </DialogContent>

        <DialogContent>
          <Button
            raised
            color='secondary'
            onClick={this.handleClose}>
            Exit
          </Button>
          <Button
            raised
            color='primary'
            onClick={this.props.submit}>
            Submit
          </Button>
        </DialogContent>

      </Dialog>
    );
  }
}

GeneralDialog.propTypes = {
  open: PropTypes.bool,
  handler: PropTypes.func,
  title: PropTypes.string,
  primaryContent: PropTypes.string,
  secondaryContent: PropTypes.string,
  submit: PropTypes.func,
};

export default GeneralDialog;
