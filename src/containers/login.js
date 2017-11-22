import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { submitLogin } from '../../reduxModules/auth'
import LoginPage from '../components/login'

const mapStateToProps = state => {
  return ({
    auth: state.auth
  })
}

const LoginReduxForm = reduxForm({
  form: 'LoginForm',
})(LoginPage)

export default connect(mapStateToProps, { submitLogin })(LoginReduxForm)
