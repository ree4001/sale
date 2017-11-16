export const FETCH_APP = 'FETCH_APP'
export const FETCH_APP_SUCCESS = 'FETCH_APP_SUCCESS'
export const FETCH_APP_FAILED = 'FETCH_APP_FAILED'
export const FETCH_APP_FOR_LEADER = 'FETCH_APP_FOR_LEADER'
export const FETCH_APP_FOR_LEADER_SUCCESS = 'FETCH_APP_FOR_LEADER_SUCCESS'
export const FETCH_APP_FOR_LEADER_FAILED = 'FETCH_APP_FOR_LEADER_FAILED'

export const fetchApp = (status, start, end) => {
  console.log('redux')
  return ({
    type: FETCH_APP,
    payload: {
      status,
      start,
      end
    }
  })
}

export const fetchAppForLeader = (status, start, end) => {
  return ({
    type: FETCH_APP_FOR_LEADER,
    payload: {
      status,
      start,
      end
    }
  })
}

const initialState = {
  appDb: {},
  appLeaderDb: {},
  error: '',
  loading: false,
  successMsg: '',
}

const application = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APP_FOR_LEADER:
    case FETCH_APP: {
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg,
      }
    }
    case FETCH_APP_SUCCESS: {
      const newApplications = action.payload.reduce(
        (prev, current) => ({ ...prev, [current.id]: { ...current } }),
        {},
      )
      return {
        ...state,
        appDb: {
          // ...state.applicationDb, TODO: // Make it store cache
          ...newApplications,
        },
        error: '',
        loading: false,
      }
    }
    case FETCH_APP_FOR_LEADER_SUCCESS: {
      const newApplications = action.payload.reduce(
        (prev, current) => ({ ...prev, [current.id]: { ...current } }),
        {},
      )
      return {
        ...state,
        appLeaderDb: {
          // ...state.applicationDb, TODO: // Make it store cache
          ...newApplications,
        },
        error: '',
        loading: false,
      }
    }
    case FETCH_APP_FOR_LEADER_FAILED: 
    case FETCH_APP_FAILED: {
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