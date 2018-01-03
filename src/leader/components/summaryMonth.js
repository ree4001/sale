import React, { Component } from 'react'
import PieChart from './pieChart'
import SummaryMonthTable from './summaryMonthTable'

class SummaryMonth extends Component {
  render() {
    let { leaderYear } = this.props
    return (
      <div>
        <div className="summaryTitle">
          <center>
            <p> ข้อมูลสรุปรายเดือน </p>
          </center>
        </div>
        <table>
          <tbody>
            <tr>
              <td style={{ border: "0px", width: '50%' }}>
                <PieChart leaderYear={leaderYear} />
              </td>
              <td style={{ border: "0px" }}>
                <SummaryMonthTable leaderYear={leaderYear} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SummaryMonth

