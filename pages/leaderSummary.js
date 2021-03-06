import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import { withReduxSaga } from '../store'
import LeaderIndex from '../src/leader/containers/leaderIndex'
import {requireAuthLeader} from '../src/hoc/requireAuth'
import { INDEXLEADER }from '../status'

class Leader extends Component {
  render() {
    const cookies = new Cookies()
    return <LeaderIndex tabmenu={ INDEXLEADER } />
  }
}

export default withReduxSaga(requireAuthLeader(Leader))
