import React, { Component } from 'react'
import TitleBarLeader from '../../components/titleBarLeader'
import { SALELOGIN } from '../../../status'
import BarChart from './barChart'
import LineChart from './lineChart'
import {
  salesevice,
} from '../../../text'

class LeaderIndex extends Component {
  componentDidMount() {
    const { fetchMonthSummary } = this.props
    fetchMonthSummary({})
  }
  render() {
    const { leader } = this.props
    return (
      <div className="wrapper">
        <div className="header">
          <TitleBarLeader title={salesevice} status={SALELOGIN} />
        </div>
        <div className="content">
          <div className="body-content">
              <BarChart />
              <LineChart />
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderIndex