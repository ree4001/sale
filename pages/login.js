import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import LoginPage from '../src/containers/login'

class Login extends Component {
  render() {
    return <LoginPage/>
  }
}

export default withReduxSaga(Login)
