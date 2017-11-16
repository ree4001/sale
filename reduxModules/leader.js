export const FETCH_MONTH_SUMMARY = 'FETCH_MONTH_SUMMARY'
export const FETCH_MONTH_SUMMARY_SUCCESS = 'FETCH_MONTH_SUMMARY_SUCCESS'
export const FETCH_MONTH_SUMMARY_FAILED = 'FETCH_MONTH_SUMMARY_FAILED'
export const FETCH_YEAR_SUMMARY = 'FETCH_YEAR_SUMMARY'
export const FETCH_YEAR_SUMMARY_SUCCESS = 'FETCH_YEAR_SUMMARY_SUCCESS'
export const FETCH_YEAR_SUMMARY_FAILED = 'FETCH_YEAR_SUMMARY_FAILED'

export const fetchMonthSummary = (month, year) => {
  return ({
    type: FETCH_MONTH_SUMMARY,
    payload: {
      month,
      year
    }
  })
}
export const fetchYrarSummary = (data) => {
  return({
    type: FETCH_YEAR_SUMMARY,
    payload: data
  })
}

const initailState = {
  monthSummaryDb: {},
  yearSummaryDb: {},
  error: '',
  loading: false,
  successMsg: '',
}

const leaderSummaryReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_YEAR_SUMMARY:
    case FETCH_MONTH_SUMMARY:{
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_YEAR_SUMMARY_SUCCESS: {
      return {
        ...state,
        yearSummaryDb: action.payload
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
    case FETCH_YEAR_SUMMARY_FAILED:
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