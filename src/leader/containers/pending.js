import { connect } from 'react-redux'
import Pending from '../components/pending'
import { fetchAppForLeader } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appLeaderDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchAppForLeader })(Pending)
