import React, { Component } from 'react'
import TitleBarCustomer from '../../components/titleBarCustomer'
import TableStatus from './tableStatus'
import ProcessStep from './processStep'
import { checkStatus } from '../../../text'
import { CHECKSTATUS } from '../../../status'
import ContacUs from './contactUs'

class CheckStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select: 0,
    }
    // this.change = this.change.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange(changeEvent) {
    this.setState({
      select: Number(changeEvent.target.value)
    })
  }
  componentDidMount() {
    const { fetchCustomerApp, fetchProduct } = this.props
    // fetchProduct()
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
        <div className="content">
          <div className="body-content">
            <TableStatus customer={customer} handleOptionChange={this.handleOptionChange} state={this.state.select} />
            <ProcessStep customer={customer[this.state.select]} />
          </div>
        </div>
        <div className="footer">
            <ContacUs />
          </div>
      </div>
    )
  }
}

export default CheckStatus