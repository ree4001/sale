import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  TRANSFERRED,
  FILLFORM,
  REJECTED,
  WAIT_VERIFY,
  WAIT_ANALYST,
  WAIT_APPROVE,
  WAIT_CONFIRM,
  WAIT_TRANSFER,
} from '../../../status'

export const Mapstep = (status, step) => {
  let returnstep = ''
  switch (step) {
    case 1: {
      if (status === FILLFORM ||
        status === WAIT_VERIFY ||
        status === WAIT_ANALYST ||
        status === WAIT_APPROVE ||
        status === WAIT_CONFIRM ||
        status === TRANSFERRED ||
        status === REJECTED ||
        status === WAIT_TRANSFER) { returnstep = 'finish' }
      else { returnstep = 'wait' }
      return returnstep
    }
    case 2: {
      if (status === WAIT_VERIFY ||
        status === WAIT_ANALYST ||
        status === WAIT_APPROVE ||
        status === WAIT_CONFIRM ||
        status === TRANSFERRED ||
        status === WAIT_TRANSFER) { returnstep = 'finish' }
      else if (status === REJECTED) { returnstep = 'nexterror' }
      else { returnstep = 'wait' }
      return returnstep
    }
    case 3:{
      if(status === TRANSFERRED) { returnstep = 'finish' }
      else if(status === REJECTED) { returnstep = 'error' }
      else { returnstep = 'wait' }
      return returnstep
    }
  }
}

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
    case REJECTED: {
      returnStatus = 'ใบสมัครถูกปฏิเสธ'
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

