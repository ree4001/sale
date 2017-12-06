import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import SubmitOTP from '../components/submitOtp'
import {sendOtp, submitLogin} from '../../../reduxModules/otpAuth'

const mapStateToProps = state => {
  return ({
    otpAuth: state.otpAuth
  })
}

const SubmitOtpReduxForm = reduxForm({
  form: 'SubmitOtpForm',
})(SubmitOTP)

export default connect(mapStateToProps, {sendOtp, submitLogin})(SubmitOtpReduxForm)
