import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class UnstyledNavLink extends Component {
  render() {
    return <NavLink { ...this.props } style={{ textDecoration: 'none' }}/>;
  }
}

export default UnstyledNavLink;
