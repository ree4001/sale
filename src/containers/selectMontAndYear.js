import { connect } from 'react-redux'
import SelectMontAndYear from '../components/selectMontAndYear'
import { setMonth, setYear } from '../../reduxModules/dateRange'

const mapStateToProps = state => {
  return({
    dateRange: state.dateRange
})
}

export default connect(mapStateToProps, { setMonth, setYear })(SelectMontAndYear)
