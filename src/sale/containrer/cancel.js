import { connect } from 'react-redux'
import Cancel from '../components/cancel'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appDb),
  })
}

export default connect(mapStateToProps, { fetchApp })(Cancel)
