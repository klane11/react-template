import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import registerServiceWorker from './initialize/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
