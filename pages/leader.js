import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import LeaderIndex from '../src/leader/containers/leaderIndex'

class Leader extends Component {
  render() {
    return <LeaderIndex/>
  }
}

export default withReduxSaga(Leader)
