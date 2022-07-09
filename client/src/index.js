import React from "react";
import ReactDOM from "react-dom";
//provider helps keep track of store in global state 7 that allows us access the store anywhere in the app
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from  'redux';
import {thunk} from 'redux-thunk';

import reducers from './reducers'

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(<App />, document.getElementById('root'));