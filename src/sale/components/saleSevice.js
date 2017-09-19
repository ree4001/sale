import React, { Component } from 'react'
import { connect } from 'react-redux'
import { salesevice } from '../../../text'
import TitleBar from '../../components/titleBar'
import ApplicationList from '../containrer/applicationList'
import WaitConfirm from '../containrer/waitConfirm'
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
} from '../../../status'
import {
  PENDING,
  REJECT,
  CANCEL,
  APPROVE,
  INCOMPLETE,
  //old status
  ALL,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
  TRANSFERRED,
} from '../../../text'

class SaleSevice extends Component {
  componentDidMount() {
  }
  render() {
    const { params, status } = this.props
    let menuActive = ''
    // const currentStatus = ALL_STATUS
    console.log('h', this.props)
    let showlist
    if (status === ALL_STATUS || status === undefined) {
      showlist = (
        <ApplicationList />
      )
    } else if (status === STATUS_REJECTED) {
      showlist = (
        <Rejected />
      )
    } else if (status === STATUS_WAIT_TRANSFER) {
      showlist = (
        <Approve />
      )
    } else if (status === STATUS_WAIT_CONFIRM) {
      showlist = (
        <WaitConfirm />
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
                <StatusMenu id={ALL_STATUS} title={ALL} />
                <StatusMenu id={STATUS_WAIT_VERIFY} title={PENDING} />
                <StatusMenu id={STATUS_WAIT_TRANSFER} title={APPROVE} />
                <StatusMenu id={STATUS_REJECTED} title={REJECT} />
                <StatusMenu id={STATUS_WAIT_TRANSFER} title={CANCEL} />
                <StatusMenu id={STATUS_TRANSFERRED} title={INCOMPLETE} />
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