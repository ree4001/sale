import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import SummaryService from '../src/sale/containers/summaryService'
import {requireAuthSale} from '../src/hoc/requireAuth'
import {SUMMARYSALE} from '../status'

class Summary extends Component {
  render() {
    return <SummaryService tabmenu={ SUMMARYSALE }/>
  }
}

export default withReduxSaga(requireAuthSale(Summary))