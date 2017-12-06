import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import OtpLoginPage from '../components/loginOtp'
import { submitGetotp } from '../../../reduxModules/otpAuth'

const mapStateToProps = state => {
  return ({
    otpAuth: state.otpAuth
  })
}

const OtpLoginReduxForm = reduxForm({
  form: 'OtpLoginForm',
})(OtpLoginPage)

export default connect(mapStateToProps, { submitGetotp })(OtpLoginReduxForm)
