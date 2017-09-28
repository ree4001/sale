import React, { Component } from 'react'
import MapProduct from '../utils/MapProduct'  
import MapStatus from '../utils/MapStatus'
import {
  applicationNo,
  productGroup,
  statusApplication,
  candidateName,
  repayType,
  creditLimit
} from '../../../text'
class TableStatus extends Component {
  render() {
    const { customer } = this.props
    // console.log('customerApp', customer)
    return (
      <div className="center">
        <table>
          <thead>
            <tr>
              <th> {applicationNo} </th>
              <th> ชื่อ </th>
              <th> นามสกุล </th>
              <th> {statusApplication} </th>
              <th> ชื่อสินเชื่อ </th>
              <th> วงเงินที่ขอ </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {customer.id} </td>
              <td> {customer.firstname} </td>
              <td> {customer.lastname} </td>
              <td> { MapStatus(customer.status)} </td>
              <td> {MapProduct(customer.productId)} </td>
              <td> {customer.appAmount} </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableStatus