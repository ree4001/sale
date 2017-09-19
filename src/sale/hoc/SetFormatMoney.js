/* [Reason] for recevie props or rowdata data from griddle
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// set format money
Number.prototype.format = function (n, x) {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
}

const SetFormatMoney = (field, float) => ({ rowData }) => {
  if (float) return (<span>{rowData[field].format(2)}</span>)
  return (<span>{rowData[field].format()}</span>)
}

SetFormatMoney.propTypes = {
  rowData: PropTypes.object,
}

export default SetFormatMoney
