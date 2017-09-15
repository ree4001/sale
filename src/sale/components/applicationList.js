import React, { Component } from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react'
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

const data = [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
]

class ApplicationList extends Component {
  componentDidMount(){
    const { fetchApp } = this.props
    fetchApp('transferred')
  }
  render() {
    const { application } = this.props
    // console.log( application ,'application')
    return (
      <div className="center1">
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
            />
            <ColumnDefinition id="status" title={statusApplication} />
            <ColumnDefinition
              id="createdDate"
              title='วันที่สร้าง'
            />
          </RowDefinition>
        </Griddle>
      </div>
    )
  }
}


export default ApplicationList