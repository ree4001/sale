import React, { Component } from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react'
import enhancedWithRowData from '../hoc/enhancedWithRowData'
import SetFormatMoney from '../hoc/SetFormatMoney'
import ChangeDate from '../hoc/ChangeDate'
import CheckProduct from '../hoc/CheckProduct'
import ChangStatusCancel from '../hoc/ChangStatusCancel'
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

class Cancel extends Component {
  componentWillReceiveProps(nextProps) {
    const { fetchApp, dateRange: { start, end } } = this.props
    if ((start !== nextProps.start) || (end !== nextProps.end)) {
      fetchApp('cancel', nextProps.start, nextProps.end)
    }
  }
  componentDidMount() {
    const { fetchApp, start, end } = this.props
    fetchApp('cancel', start, end)
  }
  render() {
    const { application } = this.props
    // console.log( application ,'application')
    return (
      <div className="griddle">
        <Griddle data={application}
        plugins={[plugins.LocalPlugin]}>
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
            <ColumnDefinition 
              id="status" 
              title={statusApplication} 
              customComponent={enhancedWithRowData(ChangStatusCancel('status'))}
              />
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


export default Cancel