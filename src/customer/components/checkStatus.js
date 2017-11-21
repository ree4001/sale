import React, { Component } from 'react'
import TitleBarCustomer from '../../components/titleBarCustomer'
import TableStatus from './tableStatus'
import ProcessStep from './processStep'
import { checkStatus } from '../../../text'
import { CHECKSTATUS } from '../../../status'

class CheckStatus extends Component {
  componentDidMount() {
    const { fetchCustomerApp, fetchProduct } = this.props
    fetchProduct()
    fetchCustomerApp('1129700031389')
    // fetchCustomerApp('4131200009225')
    // fetchCustomerApp('1129700031389')    
  }
  render() {
    const { status, customer } = this.props
    return (
      <div className="warpper">
        <div className="header">
          <TitleBarCustomer title={checkStatus} status={CHECKSTATUS} />
        </div>
        <TableStatus customer={customer} />
        <ProcessStep customer={customer} />
      </div>
    )
  }
}

export default CheckStatus