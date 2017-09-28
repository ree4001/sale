import moment from 'moment'

export const SET_START_DATE = 'SET_START_DATE'
export const SET_END_DATE = 'SET_END_DATE'

export const setStartDate = data => {
  return ({
    type: SET_START_DATE,
    payload: data.target.value
  })
}

export const setEndDate = data => {
  return ({
    type: SET_END_DATE,
    payload: data.target.value
  })
}
const endDate = moment(new Date()).format('YYYY-MM-DD');
const startDate = moment(endDate).add(-5, 'days').format('YYYY-MM-DD');

const initialState = {
  start: startDate,
  end: endDate,
  error: '',
  loading: false,
  successMsg: '',
}

const dateRange = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_DATE: {
      return {
        ...state,
        start: action.payload,
        loading: true,
      }
    }
    case SET_END_DATE: {
      return {
        ...state,
        end: action.payload,
        loading: true,
      }
    }
    default:
      return state
  }
}

export default dateRange