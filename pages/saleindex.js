import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import { salesevice } from '../text'
import SaleSevice from '../src/sale/components/saleSevice'
import {
  ALL_STATUS,
} from '../status'

class Saleindex extends Component {
  render() {
    return <SaleSevice ID={ ALL_STATUS }/>
  }
}

export default withReduxSaga(Saleindex)
