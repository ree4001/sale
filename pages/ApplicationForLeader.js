import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import ApplicationForLeader from '../src/leader/containers/applicationForLeader'

class LeaderApplicaion extends Component {
  render() {
    const status = this.props.url.query.title
    return <ApplicationForLeader status={ status }/>
  }
}

export default withReduxSaga(LeaderApplicaion)
