export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS'
export const SUBMIT_LOGIN_LOGIN_FAILED = 'SUBMIT_LOGIN_LOGIN_FAILED'


export const submitLogin = (data) => {
  return({
    type: SUBMIT_LOGIN,
    payload: data
  })
}

const initialState = {
  isLoggedIn: false,
  id: undefined,
  userID: '',
  username: '',
  error: '',
  loading: false,
  successMsg: '',
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_LOGIN: {
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg
      }
    }
    case SUBMIT_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
      break;
    }
    case SUBMIT_LOGIN_LOGIN_FAILED: {
      console.log('holyShit')
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg,
      }
    }
    default:
    return state
  }
}

export default auth