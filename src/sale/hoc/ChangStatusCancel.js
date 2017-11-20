import React from 'react'
import PropTypes from 'prop-types'

const ChangStatusCancel = () =>  ({ rowData }) => {
  return (
    <span> { 'Cancel' } </span>
  )
}

ChangStatusCancel.propTypes = {
  rowData: PropTypes.object,
}

export default ChangStatusCancel