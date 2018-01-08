import userReducer from '../../js/reducers/userReducer'

describe('userReducer', () => {
  const initialState = {
    locationID: 'LONDON'
  }

  describe('Invalid action', () => {
    const action = {
      type: 'INVALID'
    }

    it('State is unchanged', () => {
      expect(userReducer(initialState, action)).toEqual(initialState)
    })
  })
})
