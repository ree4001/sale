import React, { Component } from 'react'
import Head from 'next/head'
import {
  TRANSFERRED,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
} from '../../../status'
import {
  getApplication,
  checkApplication,
  pendingApplication,
  approvedApplication,
} from '../../../text'

class ProcessStep extends Component {
  render() {
    const { customer } = this.props
    console.log(customer.status)
    return (
      <div className="container_progressbar">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <ul className="progressbar">
          <li className={
            customer.status === FILLFORM ||
            customer.status === WAIT_VERIFY ||
            customer.status === WAIT_ANALYST ||
            customer.status === WAIT_APPROVE ||
            customer.status === WAIT_CONFIRM ||
            customer.status === TRANSFERRED ||
            customer.status === WAIT_TRANSFER ? 'finish' : 'wait'
          } > {getApplication} </li>
          <li className={
            customer.status === WAIT_VERIFY ||
            customer.status === WAIT_ANALYST ||
            customer.status === WAIT_APPROVE ||
            customer.status === WAIT_CONFIRM ||
            customer.status === TRANSFERRED ||
            customer.status === WAIT_TRANSFER ? 'finish' : 'wait'
          }> {checkApplication} </li>
          <li className={ customer.status === TRANSFERRED ? 'finish' : 'wait'}> {approvedApplication} </li>
        </ul>
      </div>
    )
  }
}

// const ProcessStep = (customer) => {
//   console.log(customer.customer.status)
//   return (
//     <div className="container_progressbar">
//       <Head>
//         <link href="/static/styles.css" rel="stylesheet" />
//       </Head>
//       <ul className="progressbar">
//         <li className="finish"> {getApplication} </li>
//         <li className="finish"> {checkApplication} </li>
//         <li className="wait"> {approvedApplication} </li>
//       </ul>
//     </div>
//   )
// }

export default ProcessStep