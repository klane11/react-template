import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from 'material-ui/styles';

import createTheme from './initializers/materialUITheme';
import createStore from './initializers/redux';
import registerServiceWorker from './initializers/registerServiceWorker';

import App from './ui/App';

const store = createStore();
const theme = createTheme();

const entry = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(entry, document.getElementById('root'));
registerServiceWorker();

