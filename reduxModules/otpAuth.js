import Router from 'next/router'

export const SUBMIT_LOGIN_OTP = 'SUBMIT_LOGIN_OTP'
export const SUBMIT_LOGIN_OTP_SUCCESS = 'SUBMIT_LOGIN_OTP_SUCCESS'
export const SUBMIT_LOGIN_OTP_FAILED = 'SUBMIT_LOGIN_OTP_FAILED'
export const GET_OTP = 'GET_OTP'
export const GET_OTP_SUCCESS = 'GET_OTP_SUCCESS'
export const GET_OTP_FAILED = 'GET_OTP_FAILED'
export const SEND_OTP = 'SEND_OTP'
export const SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS'
export const SEND_OTP_FAILED = 'SEND_OTP_FAILED'
export const SUBMIT_LOGOUT_OTP = 'SUBMIT_LOGOUT_OTP'
export const SUBMIT_LOGOUT_OTP_SUCCESS = 'SUBMIT_LOGOUT_OTP_SUCCESS'


export const submitGetotp = (data) => {
  return ({
    type: GET_OTP,
    payload: data
  })
}
export const sendOtp = (data) => {
  return ({
    type: SEND_OTP,
    payload: data
  })
}
export const submitLogin = (data) => {
  return ({
    type:SUBMIT_LOGIN_OTP,
    payload: data
  })
}

export const submitLogout = () => {
  return ({
    type: SUBMIT_LOGOUT_OTP,
  })
}

const initialState = {
  isLoggedIn: false,
  citizenID: undefined,
  mobileNo: undefined,
  error: '',
  loading: false,
  successMsg: '',
}

const otpAuth = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTP_SUCCESS: {
      const { citizenID, mobileNo } = action.payload
      Router.push(`/submitOtp`)
      return {
        ...state,
        citizenID: citizenID,
        mobileNo: mobileNo,
        successMsg: ''
      }
    }
    case SUBMIT_LOGOUT_OTP:
    case SUBMIT_LOGIN_OTP_SUCCESS: 
    case SUBMIT_LOGIN_OTP:
    case SEND_OTP_SUCCESS:
    case SEND_OTP_FAILED:
    case SUBMIT_LOGIN_OTP_FAILED: 
    case GET_OTP_FAILED: {
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg,
      }
    }
    case SUBMIT_LOGOUT_OTP_SUCCESS:{
      return {
        initialState
      }
    }
    default:
      return state
  }
}

export default otpAuth