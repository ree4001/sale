import React, { Component } from 'react'
import TitleBar from '../../components/titleBar'
import TableStatus from './tableStatus'
import ProcessStep from './processStep'
import { checkStatus } from '../../../text'
import { CHECKSTATUS } from '../../../status'

class CheckStatus extends Component {
  componentDidMount() {
    const { fetchCustomerApp, fetchProduct } = this.props
    fetchProduct()
    fetchCustomerApp('4101200009225')
    // fetchCustomerApp('4131200009225')
    // fetchCustomerApp('1129700031389')    
  }
  render() {
    const { status, customer } = this.props
    return(
      <div className="warpper">
      <TitleBar title={checkStatus} status={CHECKSTATUS}/>
      <TableStatus customer={customer}/>
      <ProcessStep customer={customer}/>
    </div>
    )
  }
}

export default CheckStatus