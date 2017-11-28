export const FETCH_CUSTOMER_APP = 'FETCH_CUSTOMER_APP'
export const FETCH_CUSTOMER_APP_SUCCESS = 'FETCH_CUSTOMER_APP_SUCCESS'
export const FETCH_CUSTOMER_APP_FAILED = 'FETCH_CUSTOMER_APP_FAILED'

export const fetchCustomerApp = (data) => {
  return ({
    type: FETCH_CUSTOMER_APP,
    payload: data
  })
}

const initialState = {
  customerApp: {},
  error: '',
  loading: false,
  successMsg: '',
}

const customerApp = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_APP: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_CUSTOMER_APP_SUCCESS: {
      return {
        ...state,
        customerApp: action.payload,
        error: '',
        loading: false,
      }
    }
    case FETCH_CUSTOMER_APP_FAILED: {
      console.log('holyShit')
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state
  }
}

export default customerApp