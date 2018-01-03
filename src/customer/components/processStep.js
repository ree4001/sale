import React, { Component } from 'react'
import Head from 'next/head'
import { Mapstep } from '../utils/MapStatus' 
import {
  TRANSFERRED,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
  REJECTED,
} from '../../../status'
import {
  getApplication,
  checkApplication,
  pendingApplication,
  approvedApplication,
  cancelApplication
} from '../../../text'

class ProcessStep extends Component {
  render() {
    const { customer } = this.props
    // console.log(customer.status)
    return (
      <div className="progressbar">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        { customer
          ? (
            <ul>
            <li className={Mapstep(customer.status, 1)}> {getApplication} </li>
            <li className={Mapstep(customer.status, 2)}> {checkApplication} </li>
            <li className={ Mapstep(customer.status, 3)}> 
            {customer.status === REJECTED ? cancelApplication: approvedApplication} </li>
          </ul>
          )
          : null
         }
      </div>
    )
  }
}


export default ProcessStep