import { PieChart, Pie, Sector, Cell } from 'recharts'
import React, { Component } from 'react'

// const data = [{ name: 'Approve', value: 130 }, { name: 'Reject', value: 40 },
// { name: 'Cancel', value: 20 }, { name: 'Incomplete', value: 60 }]
const COLORS = ['#00C49F', '#8884d8', '#FFBB28']

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.name} ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}
class PieChartSimple extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.onPieEnter = this.onPieEnter.bind(this)
  }
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    })
  }
  render() {
    let { summary } = this.props
    let data = []
    const toDate = new Date
    if (summary.approve !== undefined) {
      data = [
        { name: 'Approve', value: summary.approve[toDate.getMonth()].length },
        { name: 'Reject', value: summary.reject[toDate.getMonth()].length },
        { name: 'Cancel', value: summary.cancel[toDate.getMonth()].length }
      ]
    }
    return (
      <PieChart width={550} height={400} >
        <Pie
          dataKey="value"
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={300}
          cy={200}
          innerRadius={50}
          outerRadius={80}
          fill="#FDBF26"
          onMouseEnter={this.onPieEnter}
        >
          {
            data.map((entry, index) => <Cell key={`${COLORS[index]}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    )
  }
}

export default PieChartSimple
