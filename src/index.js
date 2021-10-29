import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Db from './components/Db';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Db />
  </React.StrictMode>,
  document.getElementById('root')
);