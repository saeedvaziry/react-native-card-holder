import React from 'react'

import { connect } from 'react-redux'

import AppNavigator from '@navigators/AppNavigator'

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
