import userReducer from '../../js/reducers/userReducer'

describe('userReducer', () => {
  const initialState = {
    customerID: undefined,
    locationID: undefined,
    error: null
  }

  describe('Invalid action', () => {
    const action = {
      type: 'INVALID'
    }

    it('State is unchanged', () => {
      expect(userReducer(initialState, action)).toEqual(initialState)
    })
  })

  describe('When getting locationID', () => {
    const stateWithCustomerID = {
      ...initialState,
      customerID: '000001'
    }

    describe('Request is successful', () => {
      const action = {
        type: 'GET_LOCATIONID_FULFILLED',
        payload: 'LONDON'
      }

      it('Stores the locationID in state', () => {
        expect(userReducer(stateWithCustomerID, action)).toEqual({
          customerID: '000001',
          locationID: 'LONDON',
          error: null
        })
      })
    })

    describe('Request is unsuccessful', () => {
      const action = {
        type: 'GET_LOCATIONID_REJECTED',
        payload: 'error'
      }

      expect(userReducer(stateWithCustomerID, action)).toEqual({
        customerID: '000001',
        locationID: undefined,
        error: 'error'
      })
    })
  })
})
