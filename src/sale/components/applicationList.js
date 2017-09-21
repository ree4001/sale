import React, { Component } from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react'
import enhancedWithRowData from '../hoc/enhancedWithRowData'
import SetFormatMoney from '../hoc/SetFormatMoney'  
import ChangeDate from '../hoc/ChangeDate'
import CheckProduct from '../hoc/CheckProduct'
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


class ApplicationList extends Component {
  componentDidMount() {
    const { fetchApp } = this.props
    fetchApp('all')
  }
  render() {
    let { application, product } =  this.props
    return (
      <div className="right-content">
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
              customComponent={enhancedWithRowData(CheckProduct(product))}
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


export default ApplicationList