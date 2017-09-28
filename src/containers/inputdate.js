import { connect } from 'react-redux'
import Imputdate from '../components/inputdate'
import { setStartDate,setEndDate } from '../../reduxModules/dateRange'

const mapStateToProps = state => {
  return({
    dateRange: state.dateRange
})
}

export default connect(mapStateToProps, { setStartDate,setEndDate })(Imputdate)
