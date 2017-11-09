import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import SummaryService from '../src/sale/containers/summaryService'

class Summary extends Component {
  render() {
    return <SummaryService/>
  }
}

export default withReduxSaga(Summary)
