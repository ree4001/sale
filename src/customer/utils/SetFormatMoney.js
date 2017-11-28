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

export default SetFormatMoney
