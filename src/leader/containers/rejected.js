import { connect } from 'react-redux'
import Rejected from '../components/rejected'
import { fetchAppForLeader } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appLeaderDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchAppForLeader })(Rejected)
