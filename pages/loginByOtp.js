import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import OtpLoginPage from '../src/customer/containers/loginOtp'

class OTPLogin extends Component {
  render() {
    return <OtpLoginPage/>
  }
}

export default withReduxSaga(OTPLogin)
