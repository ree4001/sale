import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const SetFormatDate = (start,end) => {
  let dateStart = start
  dateStart = moment(dateStart).format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  let dateEnd = end 
  dateEnd = moment(dateEnd).add(1, 'days').format('YYYY-MM-DDTHH:mm:ss.000\\Z')
  const str2 = '.000Z'
  dateStart = dateStart.concat(str2)
  dateEnd = dateEnd.concat(str2)
  return ({ dateStart , dateEnd})
  // a = new Date(a)
}

export default SetFormatDate