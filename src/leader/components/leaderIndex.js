import React, { Component } from 'react'
import TitleBarLeader from '../../components/titleBarLeader'
import { SALELOGIN } from '../../../status'
import BarChart from './barChart'
import LineChart from './lineChart'
import SummaryMonthTable from './summaryMonthTable'
import SummaryMonth from './summaryMonth'
import SelectMontAndYear from '../../containers/selectMontAndYear'
import {
  salesevice,
} from '../../../text'

class LeaderIndex extends Component {
  componentWillReceiveProps(nextProps) {
    const { fetchMonthSummary, dateRange: { month, year } } = this.props
    if ((month !== nextProps.dateRange.month) || (year !== nextProps.dateRange.year)) {
      fetchMonthSummary(nextProps.dateRange.month, nextProps.dateRange.year)
    }
  }
  componentDidMount() {
    const { fetchMonthSummary, fetchYrarSummary, dateRange: { month, year } } = this.props
    fetchMonthSummary(month, year)
    fetchYrarSummary({})
  }
  render() {
    const { leaderMonth, leaderYear } = this.props
    return (
      <div className="wrapper">
        <div className="header">
          <TitleBarLeader title={salesevice} status={SALELOGIN} />
        </div>
        <div className="content">
          <div className="body-content">
            <BarChart leaderYear={leaderYear} />
            <SummaryMonth leaderYear={leaderYear} />
            <div style={{ margin: '0 auto 30px auto', display : 'table' }}>
              <SelectMontAndYear />
            </div>
            <LineChart leaderMonth={leaderMonth} />
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderIndex