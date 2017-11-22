import React, { Component } from 'react'
import Head from 'next/head'
import TitleBar from '../../components/titleBar'
import SelectMontAndYear from '../../containers/selectMontAndYear'
import CommissionGriddle from './commissionGriddle'
import CommmissionTable from './commissionTable'
import MenuSale from './menuSale'
import PeiChart from './pieChart'
import PeiSummary from './pieSummary'
import BarChart from './barChart'
import { SALELOGIN } from '../../../status'
import {
  salesevice,
} from '../../../text'

class SummaryService extends Component {
  componentWillReceiveProps(nextProps) {
    const { fetchCommission, dateRange: { month, year } } = this.props
    if ((month !== nextProps.dateRange.month) || (year !== nextProps.dateRange.year)) {
      fetchCommission(nextProps.dateRange.month, nextProps.dateRange.year)
    }
  }
  componentDidMount() {
    const { fetchCommission, dateRange: { month, year }, fetchSummaryApp } = this.props
    fetchCommission(month, year)
    fetchSummaryApp()
  }
  render() {
    const { application, commission, summary } = this.props
    if (commission.extra_app === undefined || commission.non_extra_app === undefined) {
      const extra = application.filter(item => item.income >= 30000)
      const nonExtra = application.filter(item => item.income < 30000)
      commission.extra_app = extra.length
      commission.non_extra_app = nonExtra.length
    }
    return (
      <div className="wrapper">
        <Head>
          <link href="/static/griddle.css" rel="stylesheet" />
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <div className="header">
          <TitleBar title={salesevice} status={SALELOGIN} />
        </div>
        <div className="content">
          <div className="body-content">
            <BarChart summary={summary} />
            <PeiSummary summary={summary} />
            <SelectMontAndYear />
            <CommmissionTable commission={commission} />
            <CommissionGriddle application={application} />
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryService