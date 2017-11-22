import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Router from 'next/router'
import TitleBar from '../../components/titleBar'
import ApplicationList from '../containers/applicationList'
import Pending from '../containers/pending'
import Approve from '../containers/approve'
import Rejected from '../containers/rejected'
import Cancel from '../containers/cancel'
import Incomplete from '../containers/incomplete'
import MenuSale from './menuSale'
import StatusTab from './statusTab'
import StatusMenu from './statusMenu'
import Inputdate from '../../containers/inputdate'
import SetFormatDate from '../hoc/SetFormatDate'
import { getCookie } from '../../../sagas/util/getCookie'
import {
  ALL_STATUS,
  TRANSFERRED as STATUS_TRANSFERRED,
  REJECTED as STATUS_REJECTED,
  PENDING as STATUS_PENDING,
  INCOMPLETE as STATUS_INCOMPLETE,
  CANCEL as STATUS_CANCEL,
  SALELOGIN
} from '../../../status'
import {
  PENDING,
  REJECT,
  CANCEL,
  APPROVE,
  INCOMPLETE,
  salesevice,
  SEARCH,
  //old status
  ALL,
} from '../../../text'

class SaleSevice extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchProduct } = this.props
    fetchProduct({})
  }
  render() {
    const { status, product, dateRange: { start, end } } = this.props
    // console.log('date', SetFormatDate(dateRange.start,dateRange.end))
    let menuActive = status
    // const currentStatus = ALL_STATUS
    let showlist
    if (status === ALL_STATUS || status === undefined) {
      menuActive = ALL_STATUS
      showlist = (
        <ApplicationList start={start} end={end} />
      )
    } else if (status === STATUS_REJECTED) {
      showlist = (
        <Rejected start={start} end={end} />
      )
    } else if (status === STATUS_TRANSFERRED) {
      showlist = (
        <Approve start={start} end={end} />
      )
    } else if (status === STATUS_PENDING) {
      showlist = (
        <Pending start={start} end={end} />
      )
    } else if (status === STATUS_CANCEL) {
      showlist = (
        <Cancel start={start} end={end} />
      )
    } else if (status === STATUS_INCOMPLETE) {
      showlist = (
        <Incomplete start={start} end={end} />
      )
    }
    return (
      <div className="wrapper">
        <Head>
          <link href="/static/griddle.css" rel="stylesheet" />
        </Head>
        <div className="header">
          <TitleBar title={salesevice} status={SALELOGIN} />
        </div>
        <div className="content">
          <div className="header-content">
            <StatusTab status={menuActive} />
          </div>
          <div className="body-content">
            <Inputdate />
            {showlist}
          </div>
        </div>
      </div>
    )
  }
}

export default SaleSevice