import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import SummaryService from '../src/sale/containers/summaryService'
import {requireAuthSale} from '../src/hoc/requireAuth'

class Summary extends Component {
  render() {
    return <SummaryService/>
  }
}

export default withReduxSaga(requireAuthSale(Summary))