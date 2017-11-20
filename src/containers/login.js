import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { submitLogin } from '../../reduxModules/auth'
import LoginPage from '../components/login'

const LoginReduxForm = reduxForm({
  form: 'LoginForm',
})(LoginPage)

export default connect(null, { submitLogin })(LoginReduxForm)
