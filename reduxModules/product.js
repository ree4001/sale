export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED'

export const fetchProduct = data => {
  return ({
    type: FETCH_PRODUCT,
    payload: data
  })
}

const initialState = {
  productDb: {},
  error: '',
  loading: false,
  successMsg: '',
}

const product = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT: {
      return {
        ...state,
        loading: true,
        successMsg: action.successMsg,
      }
    }
    case FETCH_PRODUCT_SUCCESS: {
      const newProduct = action.payload.reduce(
        (prev, current) => ({ ...prev, [current.product_id]: { ...current } }),
        {},
      )
      return {
        ...state,
        productDb: {
          // ...state.applicationDb, TODO: // Make it store cache
          ...newProduct,
        },
        error: '',
        loading: false,
      }
    }
    case FETCH_PRODUCT_FAILED: {
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

export default product