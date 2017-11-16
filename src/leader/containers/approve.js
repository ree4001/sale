import { connect } from 'react-redux'
import Approve from '../components/approve'
import { fetchAppForLeader } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appLeaderDb),
    dateRange: state.dateRange
})
}

export default connect(mapStateToProps, { fetchAppForLeader })(Approve)
