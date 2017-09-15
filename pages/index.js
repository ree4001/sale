import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import IndexStatus from '../src/customer/components/checkStatus'
import {
  saleLogin,
  checkStatus,
  lederLogin,
} from '../status'

class Index extends Component { 
  render() {
    return  <IndexStatus status={checkStatus}/>
  }
}

export default withReduxSaga(Index)