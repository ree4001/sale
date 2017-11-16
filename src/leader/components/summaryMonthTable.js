import React, { Component } from 'react'
import { AddCommaToNumber } from '../../sale/util/calculateCommission'

class SummaryMonthTable extends Component {
  render() {
    const { leaderYear } = this.props
    const toDate = new Date
    let data = []
    if (leaderYear.approve !== undefined) {
      data = [
        leaderYear.approve[toDate.getMonth()],
        leaderYear.reject[toDate.getMonth()],
        leaderYear.cancel[toDate.getMonth()]
      ]
    }
    return (
      <div className="summaryTable" >
        <table style={{ marginBottom: '10px' }}>
          <thead>
            <tr>
              <th colSpan='2' style={{ backgroundColor: '#166EAD', color: '#FFF' }}> Summary </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Approve </td>
              <td> {data[0]} </td>
            </tr>
            <tr>
              <td> Reject </td>
              <td> {data[1]} </td>
            </tr>
            <tr>
              <td> Cancel </td>
              <td> {data[2]} </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#166EAD', color: '#FFF' }}> Commission </td>
              <td> {AddCommaToNumber (data[0] * 50)} </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SummaryMonthTable





