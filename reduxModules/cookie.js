import Cookies from 'universal-cookie'

// types
export const SET_COOKIE = 'SET_COOKIE'
export const REMOVE_COOKIE = 'REMOVE_COOKIE'
export const LOAD_ALL_COOKIES = 'LOAD_ALL_COOKIES'

// actions
export const setCookie = (key, value) => {
  console.log('setCokies', key, value)
  const cookies = new Cookies()
  cookies.set(key, value)
  return ({
    type: SET_COOKIE,
    payload: {
      key,
      value,
    },
  })
}

export const removeCookie = (key, value) => {
  const cookies = new Cookies()
  cookies.remove(key)
  return ({
    type: REMOVE_COOKIE,
    payload: key,
  })
}

export const loadAllCookies = cookies => ({
  type: LOAD_ALL_COOKIES,
  payload: cookies,
})


// reducer
const initialState = {}
const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIE: {     
      const { key, value } = action.payload
      const cookies = new Cookies()
      cookies.set(key, value)
      return {
        ...state,
        [key]: value,
      }
    }
    case REMOVE_COOKIE:
      const cookies = new Cookies()
      cookies.remove(action.payload)      
      const newState = Object.assign({}, state)
      delete newState[action.payload]
      return newState
    case LOAD_ALL_COOKIES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
export default cookieReducer