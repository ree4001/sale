import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import CheckStatus from '../src/customer/containers/checkStatus'
import {
  saleLogin,
  checkStatus,
  lederLogin,
} from '../status'

class Index extends Component { 
  render() {
    return  <CheckStatus status={checkStatus}/>
  }
}

export default withReduxSaga(Index)