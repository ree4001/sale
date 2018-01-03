import React from 'react'
import { AddCommaToNumber } from '../../sale/util/calculateCommission'

const SaleListSummary = summary => {
  let data = []
  let extra = 0
  let nonextra = 0
  let reject = 0
  let cancel = 0
  let approve = 0
  let commission = 0
  data = summary.summary
  const listItem = data.map((item, index) =>
    <tr key={index}>
      <td> {item.name} </td>
      <td> {item.Approve} </td>
      <td> {item.Extra} </td>
      <td> {item.NonExtra} </td>
      <td> {item.Reject} </td>
      <td> {item.Cancel} </td>
      <td> {AddCommaToNumber((item.Approve * 50))} </td>
    </tr>
  )
  data.forEach(item => {
    extra += item.Extra,
    nonextra += item.NonExtra,
    reject += item.Reject,
    cancel += item.Cancel,
    approve += item.Approve,
    commission += (item.Approve * 50)
  }
  )
  return (
    <table>
      <thead>
        <tr>
          <th> SaleCode </th>
          <th> Approve </th>
          <th> Extra </th>
          <th> NonExtra </th>
          <th> Reject </th>
          <th> Cancel </th>
          <th> Commission </th>
        </tr>
      </thead>
      <tbody>
        {listItem}
        <tr>
          <td style={{backgroundColor:'#166EAD', color:'#FFFFFF', borderColor:'#166EAD'}}> ยอดรวม </td>
          <td> {approve} </td>
          <td> {extra} </td>
          <td> {nonextra} </td>
          <td> {reject} </td>
          <td> {cancel} </td>
          <td> {AddCommaToNumber(commission)} </td>
        </tr>
      </tbody>
    </table>
  )
}
export default SaleListSummary