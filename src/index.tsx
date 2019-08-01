import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import state from './Redux/reducerHome';

import * as serviceWorker from './serviceWorker';

const store=createStore(state); /*this function creates
store from the object returned combineReducer

store is a single JS object which formed formed all the reducers combined*/

ReactDOM.render
(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
