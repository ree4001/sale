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

class Incomplete extends Component {
  componentWillReceiveProps(nextProps) {
    const { fetchAppForLeader, dateRange: { start, end } } = this.props
    if ((start !== nextProps.start) || (end !== nextProps.end)) {
      fetchAppForLeader('incomplete', nextProps.start, nextProps.end)
    }
  }
  componentDidMount() {
    const { fetchAppForLeader, start, end } = this.props
    fetchAppForLeader('incomplete', start, end)
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


export default Incomplete