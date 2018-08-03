import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer/>
      </BrowserRouter>
    );
  }
}

export default App;
