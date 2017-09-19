import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { salesevice } from '../text'
import TitleBar from '../src/components/titleBar'
// import ApplicationList from '../containrer/applicationList'
import MenuSale from '../src/sale/components/menuSale'
import StatusTab from '../src/sale/components/statusTab'
import StatusMenu from '../src/sale/components/statusMenu'
import { SALELOGIN } from '../status'
import {
  ALL_STATUS,
  FILLFORM as STATUS_FILLFORM,
  WAIT_VERIFY as STATUS_WAIT_VERIFY,
  WAIT_ANALYST as STATUS_WAIT_ANALYST,
  WAIT_APPROVE as STATUS_WAIT_APPROVE,
  WAIT_CONFIRM as STATUS_WAIT_CONFIRM,
  WAIT_TRANSFER as STATUS_WAIT_TRANSFER,
  TRANSFERRED as STATUS_TRANSFERRED,
} from '../status'
import {
  ALL,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
  TRANSFERRED,
} from '../text'
import ShowList from '../src/sale/components/showList'

class Sale extends Component {
  // componentDidMount() {
  // }
  render() {
    const status = this.props.url.query.title
    // const { params, ID } = this.props
    // const currentStatus = ALL_STATUS
    console.log('h', status)
    // let showlist
    // if (ID === ALL_STATUS) {
    //   showlist = (
    //     <ApplicationList />
    //   )
    // } else (
    //   <MenuSale />
    // )
    return (
      // <ShowList status={this.props.url.query.title} />
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
            <ul className="statusmenu">
              <StatusMenu id={ALL_STATUS} title={ALL} />
              <StatusMenu id={STATUS_FILLFORM} title={FILLFORM} />
              <StatusMenu id={STATUS_WAIT_VERIFY} title={WAIT_VERIFY} />
              <StatusMenu id={STATUS_WAIT_ANALYST} title={WAIT_APPROVE} />
              <StatusMenu id={STATUS_WAIT_APPROVE} title={WAIT_CONFIRM} />
              <StatusMenu id={STATUS_WAIT_TRANSFER} title={WAIT_TRANSFER} />
              <StatusMenu id={STATUS_TRANSFERRED} title={TRANSFERRED} />
            </ul>
            {/* {showlist} */}
          </div>
        </div>
      </div>
    )
  }
}

export default Sale