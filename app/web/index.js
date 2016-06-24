import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import PumpkinReaderReactApp from './containers/pumpkinReaderReactApp';

const store = configureStore()

render(
  <Provider store={store}>
    <PumpkinReaderReactApp />
  </Provider>,
  document.getElementById('root')
)
