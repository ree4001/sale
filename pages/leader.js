import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import { withReduxSaga } from '../store'
import LeaderIndex from '../src/leader/containers/leaderIndex'
import {requireAuthLeader} from '../src/hoc/requireAuth'

class Leader extends Component {
  render() {
    const cookies = new Cookies()
    console.log(cookies.get('token'))
    return <LeaderIndex/>
  }
}

export default withReduxSaga(requireAuthLeader(Leader))
