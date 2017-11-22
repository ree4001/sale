import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import SaleSevice from '../src/sale/containers/saleSevice'
import {requireAuthSale} from '../src/hoc/requireAuth'

class Sale extends Component {
  render() {
    const status = this.props.url.query.title
    return <SaleSevice status={ status }/>
  }
}

export default withReduxSaga(requireAuthSale(Sale))
