import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import React, { Component } from 'react'

class BarChartSimple extends Component {
  render() {
    let { summary } = this.props
    let data = []
    if (summary.approve !== undefined) {
      data = [
        { name: 'มกราคม', Approve: summary.approve[0].length, Reject: summary.reject[0].length, Cancel: summary.cancel[0].length },
        { name: 'กุมภาพันธ์', Approve: summary.approve[1].length, Reject: summary.reject[1].length, Cancel: summary.cancel[1].length },
        { name: 'มีนาคม', Approve: summary.approve[2].length, Reject: summary.reject[2].length, Cancel: summary.cancel[2].length },
        { name: 'เมษายน', Approve: summary.approve[3].length, Reject: summary.reject[3].length, Cancel: summary.cancel[3].length },
        { name: 'พฤษภาคม', Approve: summary.approve[4].length, Reject: summary.reject[4].length, Cancel: summary.cancel[4].length },
        { name: 'มิถุนายน', Approve: summary.approve[5].length, Reject: summary.reject[5].length, Cancel: summary.cancel[5].length },
        { name: 'กรกฎาคม', Approve: summary.approve[6].length, Reject: summary.reject[6].length, Cancel: summary.cancel[6].length },
        { name: 'สิงหาคม', Approve: summary.approve[7].length, Reject: summary.reject[7].length, Cancel: summary.cancel[7].length },
        { name: 'กันยายน', Approve: summary.approve[8].length, Reject: summary.reject[8].length, Cancel: summary.cancel[8].length },
        { name: 'ตุลาคม', Approve: summary.approve[9].length, Reject: summary.reject[9].length, Cancel: summary.cancel[9].length },
        { name: 'พฤศจิกายน', Approve: summary.approve[10].length, Reject: summary.reject[10].length, Cancel: summary.cancel[10].length },
        { name: 'ธันวาคม', Approve: summary.approve[11].length, Reject: summary.reject[11].length, Cancel: summary.cancel[11].length },
      ]
    }

    return (
      <div>
        <div className="summaryTitle">
          <center>
            <p> ข้อมูลสรุปรายปี </p>
          </center>
        </div>
        <BarChart width={980} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Reject" fill="#8884d8" />
          <Bar dataKey="Approve" fill="#82ca9d" />
          <Bar dataKey="Cancel" fill="#FDBF26" />
        </BarChart>
      </div>
    )
  }
}

export default BarChartSimple