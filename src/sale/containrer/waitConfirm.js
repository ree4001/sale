import { connect } from 'react-redux'
import WaitConfirm from '../components/waitConfirm'
import { fetchApp } from '../../../reduxModules/application'

const mapStateToProps = state => {
  return({
    application: Object.values(state.application.appDb),
  })
}

export default connect(mapStateToProps, { fetchApp })(WaitConfirm)
