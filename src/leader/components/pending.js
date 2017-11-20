import React, { Component } from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react'
import enhancedWithRowData from '../../sale/hoc/enhancedWithRowData'
import SetFormatMoney from '../../sale/hoc/SetFormatMoney'
import ChangeDate from '../../sale/hoc/ChangeDate'
import CheckProduct from '../../sale/hoc/CheckProduct'
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

class Pending extends Component {
  componentWillReceiveProps(nextProps) {
    const { fetchAppForLeader, dateRange: { start, end } } = this.props
    if ((start !== nextProps.start) || (end !== nextProps.end)) {
      fetchAppForLeader('pending', nextProps.start, nextProps.end)
    }
  }
  componentDidMount() {
    const { fetchAppForLeader, start, end } = this.props
    fetchAppForLeader('pending', start, end)
  }
  render() {
    const { application } = this.props
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


export default Pending