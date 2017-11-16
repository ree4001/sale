import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import React, { Component } from 'react'
import SaleListSummary from './saleListSummary'

class SimpleLineChart extends Component {
  render() {
    let data = []
    let { leaderMonth } = this.props
    Object.keys(leaderMonth).forEach(item => {
      const itemInData = {
        name: leaderMonth[item].sale_id,
        Approve: leaderMonth[item].approve,
        Extra: leaderMonth[item].extra,
        NonExtra: leaderMonth[item].nonExtra,
        Reject: leaderMonth[item].reject,
        Cancel: leaderMonth[item].cancel
      }
      data.push(itemInData)
    })
    const listItem = data.map((item) => 
      <tr>
        <td> {item.name} </td>
        <td> {item.Extra} </td>
        <td> {item.NonExtra} </td>
        <td> {item.Reject} </td>
        <td> {item.Cancel} </td>
      </tr>
    )
    return (
      <div className="summary">
        <LineChart width={600} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Extra" stroke="#82ca9d" activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="NonExtra" stroke="#cc6699" activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Reject" stroke="#8884d8" activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Cancel" stroke="#FDBF26" activeDot={{ r: 6 }} />
        </LineChart>
        <SaleListSummary summary = {data} /> 
      </div>
    )
  }
}

export default SimpleLineChart