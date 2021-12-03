import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App msg="Hello Developers" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
