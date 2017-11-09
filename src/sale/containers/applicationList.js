import { connect } from 'react-redux'
import applicationList from '../components/applicationList'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appDb), 
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchApp })(applicationList)
