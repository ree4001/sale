import { connect } from 'react-redux'
import SummaryService from '../components/summaryService'
import { fetchCommission } from '../../../reduxModules/commission'
import { fetchSummaryApp } from '../../../reduxModules/summary'

const mapStateToProps = state => {
  return({
    application: Object.values(state.commission.commissionDb.application),
    commission:  state.commission.commissionDb.commission,
    summary: state.summary.SummaryAppDb,
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchCommission, fetchSummaryApp })(SummaryService)