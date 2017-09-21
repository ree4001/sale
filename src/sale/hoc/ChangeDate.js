/* [Reason] for recevie props or rowdata data from griddle
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const ChangeDate = (field, checkTRC) => ({ rowData }) => {
  // console.log('rowdata', rowData)
  if (checkTRC && rowData.trc === 'ADJ') {
    return (
      <span style={{ color: '#ff8000' }}>{moment(rowData[field]).add(543, 'year').format('D MMM YYYY')}</span>
    )
  }
  return (
    <span>{moment(rowData[field]).add(543, 'year').format('D MMM YYYY')}</span>
  )
}

ChangeDate.propTypes = {
  rowData: PropTypes.object,
}

export default ChangeDate
