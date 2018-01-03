import React, { Component } from 'react'
import PieChart from './pieChart'
import SummaryTable from './summaryTable'
import { CalculateCommission,AddCommaToNumber } from '../util/calculateCommission'

class PeiSummary extends Component {
  render() {
    let { summary } = this.props
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
              <td style={{ border:"0px", width: '50%'}}>
                <PieChart summary={summary} />
              </td>
              <td style={{ border:"0px"}}>
              <SummaryTable summary={summary} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PeiSummary

