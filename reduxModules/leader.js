export const FETCH_MONTH_SUMMARY = 'FETCH_MONTH_SUMMARY'
export const FETCH_MONTH_SUMMARY_SUCCESS = 'FETCH_MONTH_SUMMARY_SUCCESS'
export const FETCH_MONTH_SUMMARY_FAILED = 'FETCH_MONTH_SUMMARY_FAILED'

export const fetchMonthSummary = (data) => {
  return ({
    type: FETCH_MONTH_SUMMARY,
    payload: data
  })
}

const initailState = {
  monthSummaryDb: {},
  error: '',
  loading: false,
  successMsg: '',
}

const leaderSummaryReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_MONTH_SUMMARY:{
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_MONTH_SUMMARY_SUCCESS: {
      const newCommission = action.payload.reduce(
        (prev, current) => ({...prev, [current.sale_id]: { ...current }}),
        {},
      )
      return {
        ...state,
        monthSummaryDb:{
          ...newCommission,
        },
        error: '',
        loading: false,
      }
    }
    case FETCH_MONTH_SUMMARY_FAILED: {
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

export default leaderSummaryReducer