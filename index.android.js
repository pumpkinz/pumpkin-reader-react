import React, { Component } from 'react'
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore'
import PumpkinReaderReactApp from './app/containers/pumpkinReaderReactApp';

import { AppRegistry } from 'react-native'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PumpkinReaderReactApp />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PumpkinReaderReact', () => App);
