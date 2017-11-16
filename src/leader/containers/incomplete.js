import { connect } from 'react-redux'
import Incomplete from '../components/incomplete'
import { fetchAppForLeader } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appLeaderDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchAppForLeader })(Incomplete)
