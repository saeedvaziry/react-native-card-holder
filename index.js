import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import AppReducer from '@reducers/AppReducer'
import App from './src/App'

import thunk from 'redux-thunk'

class ReduxApp extends React.Component {
  store = createStore(AppReducer, applyMiddleware(thunk))

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default ReduxApp

import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => ReduxApp)
