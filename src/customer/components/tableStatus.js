import React, { Component } from 'react'
import MapProduct from '../utils/MapProduct'
import MapStatus from '../utils/MapStatus'
import { AddCommaToNumber } from '../../sale/util/calculateCommission'
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
    const { customer, handleOptionChange, state } = this.props
    const listItem = customer.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <input type="radio" value={index}
              checked={state === index}
              onChange={handleOptionChange} />
          </td>
          <td> {item.id} </td>
          <td> {item.firstname} </td>
          <td> {item.lastname} </td>
          <td> {MapStatus(item.status)} </td>
          <td> {MapProduct(item.productId)} </td>
          <td> {AddCommaToNumber(item.appAmount)} </td>
        </tr>
      )
    }
    )
    return (
      <div className="center">
        <table>
          <thead>
            <tr>
              <th> เลือกดูสถานะ </th>
              <th> {applicationNo} </th>
              <th> ชื่อ </th>
              <th> นามสกุล </th>
              <th> {statusApplication} </th>
              <th> ชื่อสินเชื่อ </th>
              <th> วงเงินที่ขอ </th>
            </tr>
          </thead>
          <tbody>
            {listItem}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableStatus