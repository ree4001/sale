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


class CommissionGriddle extends Component {
  componentDidMount() {}
  render() {
    const { application } =  this.props
    return (
      <div className="griddle">
        <Griddle 
        data={application}
        plugins={[plugins.LocalPlugin]}
        >
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
              customComponent={enhancedWithRowData(CheckProduct('productId'))}
            />
            <ColumnDefinition
              id="appAmount"
              title='วงเงิน'
              customComponent={enhancedWithRowData(SetFormatMoney('appAmount'))}
            />
            <ColumnDefinition id="status" title={statusApplication} />
            <ColumnDefinition
            id="createdDate"
            title='วันรับงาน'
            customComponent={enhancedWithRowData(ChangeDate('createdDate'))}
            />
          </RowDefinition>
        </Griddle> 
      </div>
    )
  }
}


export default CommissionGriddle