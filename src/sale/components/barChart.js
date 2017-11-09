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
    let { summary } = this.props
    let data = []
    if (summary.approve !== undefined) {
      console.log(summary.reject[9].length)
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
        <div>
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
        <style jsx global>{`
      .recharts-wrapper { 
        margin: 0 auto;
        width: 1100px;
      }
    `}</style>
      </div>
    )
  }
}

export default BarChartSimple