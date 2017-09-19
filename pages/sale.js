import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import { salesevice } from '../text'
import SaleSevice from '../src/sale/components/saleSevice'

class Saleindex extends Component {
  render() {
    const status = this.props.url.query.title
    return <SaleSevice status={ status }/>
  }
}

export default withReduxSaga(Saleindex)
