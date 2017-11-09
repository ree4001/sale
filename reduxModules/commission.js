export const FETCH_COMMISSION = 'FETCH_COMMISSION'
export const FETCH_COMMISION_SUCCESS = 'FETCH_COMMISION_SUCCESS'
export const FETCH_COMMISION_FAILED = 'FETCH_COMMISION_FAILED'


export const fetchCommission = (month, year) => {
  return({
    type: FETCH_COMMISSION,
    payload: {
      month,
      year
    }
  })
}

const initialState = {
  commissionDb: {
    application: {},
    commission: {}
  },
  error: '',
  loading: false,
  successMsg: '',
}

const commission = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMMISSION: {
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg
      }
    }
    case FETCH_COMMISION_SUCCESS: {
      const newApplications = action.payload.applications.reduce(
        (prev, current) => ({...prev, [current.id]: { ...current }}),
        {},
      )
      return {
        ...state,
        commissionDb: {
          application: { ...newApplications },
          commission: action.payload.commission,
        },
        error: '',
        loading: false,
      }
    }
    case FETCH_COMMISION_FAILED: {
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

export default commission