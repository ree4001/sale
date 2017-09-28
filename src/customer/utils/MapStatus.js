import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  TRANSFERRED,
  FILLFORM,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
} from '../../../status'


const MapStatus = (status) => {
  let returnStatus = ''
  switch (status) {
    case FILLFORM: {
      returnStatus = 'บริษัทได้รับใบสมัครเรียบร้อยแล้ว'
      break
    }
    case TRANSFERRED: {
      returnStatus = 'ได้รับการอนุมัติสินเชื่อเรียบร้อยแล้ว'
      break
    }
    case undefined: {
      returnStatus = ''
      break
    }
    default: {
      returnStatus = 'อยู่ระหว่างการตรวจสอบข้อมูลและเอกสาร'
    }
  }
  return (
    returnStatus
  )
}

MapStatus.PropTypes = {
  rowData: PropTypes.object,
}
export default MapStatus

