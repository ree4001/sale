import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import ApplicationForLeader from '../src/leader/containers/applicationForLeader'
import {requireAuthLeader} from '../src/hoc/requireAuth'
import {APPLICATION_UNDER_SALE}from '../status'

class LeaderApplicaion extends Component {
  render() {
    const status = this.props.url.query.title
    return <ApplicationForLeader status={ status } tabmenu={ APPLICATION_UNDER_SALE }/>
  }
}

export default withReduxSaga(requireAuthLeader(LeaderApplicaion))
