import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import CheckStatus from '../src/customer/containers/checkStatus'
import { requireAuthCustomer } from '../src/hoc/requireAuth'
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

export default withReduxSaga(requireAuthCustomer(Index))