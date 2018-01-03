export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS'
export const SUBMIT_LOGIN_FAILED = 'SUBMIT_LOGIN_FAILED'
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT'
export const SUBMIT_LOGOUT_SUCCESS = 'SUBMIT_LOGOUT_SUCCESS'


export const submitLogin = (data) => {
  return ({
    type: SUBMIT_LOGIN,
    payload: data
  })
}

export const submitLogout = () => {
  return ({
    type: SUBMIT_LOGOUT,
  })
}

const initialState = {
  isLoggedIn: false,
  id: undefined,
  userID: undefined,
  token: undefined,
  error: '',
  loading: false,
  successMsg: '',
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LOGOUT:
    case SUBMIT_LOGIN: {
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg
      }
    }
    case SUBMIT_LOGIN_SUCCESS: {
      const { id, username, token } = action.payload
      return {
        ...state,
        isLoggedIn: true,
        id: id,
        userID: username,
        token: token,
        loading: true,
      }
      break;
    }
    case SUBMIT_LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        successMsg: action.successMsg,
      }
    }
    case SUBMIT_LOGOUT_SUCCESS:{
      return {
        initialState
      }
    }
    default:
      return state
  }
}

export default auth