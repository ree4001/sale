import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import SubmitOTP from '../src/customer/containers/submitOtp'

class SubmitOtpLogin extends Component {
  render() {
    return <SubmitOTP/>
  }
}

export default withReduxSaga(SubmitOtpLogin)
