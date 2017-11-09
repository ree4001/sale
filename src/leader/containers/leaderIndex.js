import { connect } from 'react-redux'
import leaderIndex from '../components/leaderIndex'
import { fetchMonthSummary } from '../../../reduxModules/leader'

const mapStateToProps = state => {
  return({
    leader: state.leader.monthSummaryDb
  })
}

export default connect(mapStateToProps, { fetchMonthSummary })(leaderIndex)