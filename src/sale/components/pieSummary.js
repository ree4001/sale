import React, { Component } from 'react'
import PieChart from './pieChart'
import CalculateCommission , { AddCommaToNumber } from '../util/calculateCommission'

class PeiSummary extends Component {
  render() {
    let { summary } = this.props
    let data = []
    let  dataApprove = []
    const toDate = new Date()
    if (summary.approve !== undefined) {
      dataApprove = summary.approve[toDate.getMonth()]
      data = [
        summary.approve[toDate.getMonth()].length,
        summary.reject[toDate.getMonth()].length,
        summary.cancel[toDate.getMonth()].length
      ]
    }
     const extra = dataApprove.filter(item => item.income >= 30000)
     const nonExtra = dataApprove.filter(item => item.income < 30000)
     const commission = CalculateCommission(extra.length, nonExtra.length)
    return (
      <div>
        <div>
          <center>
            <p> ข้อมูลสรุปรายเดือน </p>
          </center>
        </div>
        <table>
          <tbody>
            <tr>
              <td style={{ border:"0px"}}>
                <PieChart summary={summary} />
              </td>
              <td style={{ border:"0px"}}>
                <div className="summaryTable">
                  <table>
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
                        <td> { AddCommaToNumber(commission) } </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PeiSummary

