import React, { Component } from 'react'
import { AddCommaToNumber } from '../util/calculateCommission'

class CommissionTable extends Component {
  componentDidMount () { }
  render() {
  const { commission } = this.props
  let  length1 = 0
  let  length2 = 0
  let  length3 = 0
  let result = 0
  if (commission.non_extra_app <= 40) {
     length1 = commission.non_extra_app 
     result = commission.non_extra_app * 300
    } else if (commission.non_extra_app <= 80 ) {
    length1 = 40
    length2 = (commission.non_extra_app - 40)
    result = ((length1 * 300) + ((commission.non_extra_app - 40) * 350))
  } else {
    length1 = 40 
    length2 = 40
    length3 = (commission.non_extra_app - 80)
    result = ((length1 * 300) + (length2 * 350) + (length3 * 400))
  } 
    return (
      <div className="commis">
        <table>
        <thead>
            <tr>
              <th colSpan='3' style={{fontSize:'15px'}}> ตารางสรุปค่า Commission </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{width: '50%'}}> ใบสมัครสินเช่ือแคชเอกซ์ตร้า จำนวน {commission.extra_app} ใบ </td>
              <td> 500 ต่อใบ </td>
              <td> {commission.extra_app} x 500 = {AddCommaToNumber(commission.extra_app * 500)} </td>
            </tr>
            <tr>
              <td style={{width: '50%'}}> ใบสมัครสินเช่ืออื่นๆ ใบที่ 1-40 </td>
              <td> 300 ต่อใบ </td>
              <td> {length1} x 300 = {AddCommaToNumber(length1 * 300)} </td>
            </tr>
            <tr>
              <td style={{width: '50%'}}> ใบสมัครสินเช่ืออื่นๆ ใบที่ 41-80 </td>
              <td> 350 ต่อใบ </td>
              <td> {length2} x 350 = {AddCommaToNumber(length2 * 350)} </td>
            </tr>
            <tr>
              <td style={{width: '50%'}}> ใบสมัครสินเช่ืออื่นๆ ใบที่ 81 ขึ้นไป </td>
              <td> 400 ต่อใบ </td>
              <td> {length3} x 400 = {AddCommaToNumber(length3 * 400)} </td>
            </tr>
            <tr style={{ fontSize: '15px' }}>
              <td colSpan='2' style={{textAlign: 'right'}}> รวมค่าตอบแทน </td>
              <td style={{backgroundColor: '#ddd'}}> {AddCommaToNumber(result + (commission.extra_app * 500))} บาท </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CommissionTable