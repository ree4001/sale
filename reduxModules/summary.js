export const FETCH_SUMMARY_APP = 'FETCH_SUMMARY_APP'
export const FETCH_SUMMARY_APP_SUCESS = 'FETCH_SUMMARY_APP_SUCESS'
export const FETCH_SUMMARY_APP_FAILD = 'FETCH_SUMMARY_APP_FAILD'

export const fetchSummaryApp = () => {
  return({
    type: FETCH_SUMMARY_APP
  })
}
const initialState = {
  SummaryAppDb: {},
  error: '',
  loading: false,
  successMsg: ''
}

const summary = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SUMMARY_APP:{
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg
      }
    }
    case FETCH_SUMMARY_APP_SUCESS:{
      return {
        ...state,
        SummaryAppDb: action.payload,
        error: '',
        loading: false,
      }
    }
    case FETCH_SUMMARY_APP_FAILD:{
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

export default summary