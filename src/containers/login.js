import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { submitLogin } from '../../reduxModules/auth'
import LoginPage from '../components/login'

const mapStateToProps = state => {
  const selector = formValueSelector('LoginForm')
  return ({
    auth: state.auth,
    value: selector(state, 'username', 'password')
  })
}


const LoginReduxForm = reduxForm({
  form: 'LoginForm',
})(LoginPage)

export default connect(mapStateToProps, { submitLogin })(LoginReduxForm)
