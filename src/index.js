import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './STORE.js';
import App from './App';

ReactDOM.render(<App storeData={STORE}/>, document.getElementById('root'));

// set STORE as a prop to be used in App.js
