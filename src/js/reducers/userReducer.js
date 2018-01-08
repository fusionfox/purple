const initialState = {
  customerID: '000001',
  locationID: undefined,
  error: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_LOCATIONID_FULFILLED': {
      return {
        ...state,
        locationID: action.payload
      }
    }
    case 'GET_LOCATIONID_REJECTED': {
      return {
        ...state,
        error: action.payload
      }
    }
    default: return state
  }
}
