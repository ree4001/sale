import { connect } from 'react-redux'
import { rowDataSelector } from '../selectors/griddleSelector'

const enhancedWithRowData = connect((state, props) => {
  return {
    rowData: rowDataSelector(state, props),
  }
})

export default enhancedWithRowData
