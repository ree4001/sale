import { connect } from 'react-redux'
import Cancel from '../components/cancel'
import { fetchAppForLeader } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appLeaderDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchAppForLeader })(Cancel)
