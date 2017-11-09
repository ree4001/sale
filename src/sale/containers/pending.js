import { connect } from 'react-redux'
import Pending from '../components/pending'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchApp })(Pending)
