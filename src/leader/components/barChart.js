import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import React, { Component } from 'react'

// const data = [
//   { name: 'มกราคม', Approve: 120, Reject: 30, Cancel: 0 },
//   { name: 'กุมภาพันธ์', Approve: 150, Reject: 40, Cancel: 12 },
//   { name: 'มีนาคม', Approve: 70, Reject: 20, Cancel: 20 },
//   { name: 'เมษายน', Approve: 120, Reject: 50, Cancel: 30 },
//   { name: 'พฤษภาคม', Approve: 100, Reject: 40, Cancel: 50 },
//   { name: 'มิถุนายน', Approve: 60, Reject: 20, Cancel: 70 },
//   { name: 'กรกฎาคม', Approve: 80, Reject: 15, Cancel: 20 },
//   { name: 'สิงหาคม', Approve: 150, Reject: 40, Cancel: 15 },
//   { name: 'กันยายน', Approve: 130, Reject: 35, Cancel: 10 },
//   { name: 'ตุลาคม', Approve: 90, Reject: 26, Cancel: 32 },
//   { name: 'พฤศจิกายน', Approve: 200, Reject: 40, Cancel: 34 },
//   { name: 'ธันวาคม', Approve: 110, Reject: 10, Cancel: 18 },
// ]

class BarChartSimple extends Component {
  render() {
    let { leaderYear } = this.props
    let data = []
    if (leaderYear.approve !== undefined) {
      data = [
        { name: 'มกราคม', Approve: leaderYear.approve[0], Reject: leaderYear.reject[0], Cancel: leaderYear.cancel[0] },
        { name: 'กุมภาพันธ์', Approve: leaderYear.approve[1], Reject: leaderYear.reject[1], Cancel: leaderYear.cancel[1] },
        { name: 'มีนาคม', Approve: leaderYear.approve[2], Reject: leaderYear.reject[2], Cancel: leaderYear.cancel[2] },
        { name: 'เมษายน', Approve: leaderYear.approve[3], Reject: leaderYear.reject[3], Cancel: leaderYear.cancel[3] },
        { name: 'พฤษภาคม', Approve: leaderYear.approve[4], Reject: leaderYear.reject[4], Cancel: leaderYear.cancel[4] },
        { name: 'มิถุนายน', Approve: leaderYear.approve[5], Reject: leaderYear.reject[5], Cancel: leaderYear.cancel[5] },
        { name: 'กรกฎาคม', Approve: leaderYear.approve[6], Reject: leaderYear.reject[6], Cancel: leaderYear.cancel[6] },
        { name: 'สิงหาคม', Approve: leaderYear.approve[7], Reject: leaderYear.reject[7], Cancel: leaderYear.cancel[7] },
        { name: 'กันยายน', Approve: leaderYear.approve[8], Reject: leaderYear.reject[8], Cancel: leaderYear.cancel[8] },
        { name: 'ตุลาคม', Approve: leaderYear.approve[9], Reject: leaderYear.reject[9], Cancel: leaderYear.cancel[9] },
        { name: 'พฤศจิกายน', Approve: leaderYear.approve[10], Reject: leaderYear.reject[10], Cancel: leaderYear.cancel[10] },
        { name: 'ธันวาคม', Approve: leaderYear.approve[11], Reject: leaderYear.reject[11], Cancel: leaderYear.cancel[11] },
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