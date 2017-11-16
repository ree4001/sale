import { connect } from 'react-redux'
import LeaderIndex from '../components/leaderIndex'
import { fetchMonthSummary, fetchYrarSummary } from '../../../reduxModules/leader'

const mapStateToProps = state => {
  return({
    leaderMonth: state.leader.monthSummaryDb,
    leaderYear: state.leader.yearSummaryDb,
    dateRange: state.dateRange
})
}

export default connect(mapStateToProps, { fetchMonthSummary, fetchYrarSummary })(LeaderIndex)
