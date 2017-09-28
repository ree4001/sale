import { connect } from 'react-redux'
import Rejected from '../components/rejected'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchApp })(Rejected)
