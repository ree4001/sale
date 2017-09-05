import React from 'react'
import {
  applicationNo,
  productGroup,
  statusApplication,
  candidateName,
  repayType,
  creditLimit
} from '../text'

const TableStatus = () => (
  <div className="center">
    <table>
      <thead>
        <tr>
          <th> { applicationNo } </th>
          <th> { productGroup } </th>
          <th> { statusApplication } </th>
          <th> { candidateName } </th>
          <th> { repayType } </th>
          <th> { creditLimit } </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 112-144-000 </td>
          <td> Staff Loan </td>
          <td> บริษัทได้รับใบสมัครเรียบร้อยแล้ว </td>
          <td> นายมานพ คงดี </td>
          <td> Revolving </td>
          <td> 0,000 </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default TableStatus