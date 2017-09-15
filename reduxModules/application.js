export const FETCH_APP = 'FETCH_APP'
export const FETCH_APP_SUCCESS = 'FETCH_APP_SUCCESS'
export const FETCH_APP_FAILED = 'FETCH_APP_FAILED'

export const fetchApp = data => {
  return({
    type: FETCH_APP,
    payload: data
  })
}

const initialState = {
  appDb: {},
  error: '',
  loading: false,
  successMsg: '',
}

const application = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_APP:{
    console.log('FETCH_APP: action', action)
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg,
      }
    }
    case FETCH_APP_SUCCESS: {
      const newApplications = action.payload.reduce(
        (prev, current) => Object.assign(prev, { [current.id]: { ...current } }),
        {},
      )
      return {
        ...state,
        appDb: {
          // ...state.applicationDb, TODO: // Make it store cache
          ...state.appDb,
          ...newApplications,
        },
        error: '',
        loading: false,
      }
    }
    case FETCH_APP_FAILED:{
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

export default application