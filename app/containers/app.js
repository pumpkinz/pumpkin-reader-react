import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

import PumpkinReaderReactApp from './pumpkinReaderReactApp';
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(createStore);
const store = createStoreWithMiddleware(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PumpkinReaderReactApp />
      </Provider>
    );
  }
}
