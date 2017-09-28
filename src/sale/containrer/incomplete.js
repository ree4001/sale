import { connect } from 'react-redux'
import Incomplete from '../components/incomplete'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appDb),
    dateRange: state.dateRange
  })
}

export default connect(mapStateToProps, { fetchApp })(Incomplete)
