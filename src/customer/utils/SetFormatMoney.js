/* [Reason] for recevie props or rowdata data from griddle
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

function SetFormatMoney(val){
  while (/(\d+)(\d{3})/.test(val)){
    val = val.replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  console.log(val)
  return val;
}

// set format money
// Number.prototype.format = function (n, x) {
//   const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`
//   return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
// }

// const SetFormatMoney = (field, float) => {
//   // if (float) return (<span>{field.format(2)}</span>)
//   console.log(field)
//    return (<span>{field}</span>)
// }

// SetFormatMoney.propTypes = {
//   rowData: PropTypes.object,
// }

export default SetFormatMoney
