import React, { Component } from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react'
import enhancedWithRowData from '../hoc/enhancedWithRowData'
import SetFormatMoney from '../hoc/SetFormatMoney'
import ChangeDate from '../hoc/ChangeDate'
import {
  applicationNo,
  productGroup,
  statusApplication,
  candidateName,
  repayType,
  creditLimit,
  phonenumber,
  productName
} from '../../../text'

class WaitConfirm extends Component {
  componentDidMount() {
    const { fetchApp } = this.props
    fetchApp('waitConfirm')
  }
  render() {
    const { application } = this.props
    // console.log( application ,'application')
    return (
      <div>
        <Griddle data={application}>
          <RowDefinition>
            <ColumnDefinition
              id="id"
              title={applicationNo}
            />
            <ColumnDefinition id="firstname" title='ชื่อ' />
            <ColumnDefinition id="lastname" title='นามสกุล' />
            <ColumnDefinition
              id="productName"
              title={productName}
            />
            <ColumnDefinition
              id="appAmount"
              title='วงเงิน'
              customComponent={enhancedWithRowData(SetFormatMoney('appAmount'))}
            />
            <ColumnDefinition id="status" title={statusApplication} />
            <ColumnDefinition
              id="createdDate"
              title='วันที่สร้าง'
              customComponent={enhancedWithRowData(ChangeDate('createdDate'))}
            />
          </RowDefinition>
        </Griddle>
      </div>
    )
  }
}


export default WaitConfirm