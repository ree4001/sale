import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { salesevice } from '../../../text'
import TitleBar from '../../components/titleBar'
import ApplicationList from '../containrer/applicationList'
import Pending from '../containrer/pending'
import Approve from '../containrer/approve'
import Rejected from '../containrer/rejected'
import MenuSale from './menuSale'
import StatusTab from './statusTab'
import StatusMenu from './statusMenu'
import { SALELOGIN } from '../../../status'
import {
  ALL_STATUS,
  FILLFORM as STATUS_FILLFORM,
  WAIT_VERIFY as STATUS_WAIT_VERIFY,
  WAIT_ANALYST as STATUS_WAIT_ANALYST,
  WAIT_APPROVE as STATUS_WAIT_APPROVE,
  WAIT_CONFIRM as STATUS_WAIT_CONFIRM,
  WAIT_TRANSFER as STATUS_WAIT_TRANSFER,
  TRANSFERRED as STATUS_TRANSFERRED,
  REJECTED as STATUS_REJECTED,
  PENDING as STATUS_PENDING,
  INCOMPLETE as STATUS_INCOMPLETE,
} from '../../../status'
import {
  PENDING,
  REJECT,
  CANCEL,
  APPROVE,
  INCOMPLETE,
  //old status
  ALL,
} from '../../../text'

class SaleSevice extends Component {
  componentDidMount() {
    const { fetchProduct } = this.props
    fetchProduct({})
  }
  render() {
    const { params, status, product } = this.props
    let menuActive = status
    // const currentStatus = ALL_STATUS
    let showlist
    if (status === ALL_STATUS || status === undefined) {
      menuActive = ALL_STATUS
      showlist = (
        <ApplicationList product={product} />
      )
    } else if (status === STATUS_REJECTED) {
      showlist = (
        <Rejected />
      )
    } else if (status === STATUS_TRANSFERRED) {
      showlist = (
        <Approve />
      )
    } else if (status === STATUS_PENDING) {
      showlist = (
        <Pending />
      )
    }
    return (
      <div className="wrapper">
        <div className="header">
          <TitleBar title={salesevice} status={SALELOGIN} />
        </div>
        <div className="content">
          <div className="left-panel">
            <div className="nevbar">
              <MenuSale />
            </div>
          </div>
          <div className="right-section">
            <div className="right-header">
              <ul className="statusmenu">
                <StatusMenu id={ALL_STATUS} title={ALL} status={menuActive}/>
                <StatusMenu id={STATUS_PENDING} title={PENDING} status={menuActive}/>
                <StatusMenu id={STATUS_TRANSFERRED} title={APPROVE} status={menuActive}/>
                <StatusMenu id={STATUS_REJECTED} title={REJECT} status={menuActive}/>
                <StatusMenu id={STATUS_WAIT_TRANSFER} title={CANCEL} status={menuActive}/>
                <StatusMenu id={STATUS_INCOMPLETE} title={INCOMPLETE} status={menuActive}/>
              </ul>
            </div>
            <div className="right-content">
              {showlist}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SaleSevice