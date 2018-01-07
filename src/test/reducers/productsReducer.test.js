import productsReducer from '../../js/reducers/productsReducer'

describe('productsReducer', () => {
  const stateWithEmptyBasket = {
    productList: [
      {id: 'pr1', name: 'Number One'},
      {id: 'pr2', name: 'Number Two'}
    ],
    basket: []
  }

  describe('Invalid action', () => {
    const action = {
      type: 'INVALID'
    }

    it('State is unchanged', () => {
      expect(productsReducer(stateWithEmptyBasket, action)).toEqual(stateWithEmptyBasket)
    })
  })

  describe('ADD_PRODUCT action', () => {
    const action = {
      type: 'ADD_PRODUCT',
      payload: {}
    }

    it('If product found in list, is added to basket', () => {
      action.payload.productId = 'pr1'
      expect(productsReducer(stateWithEmptyBasket, action).basket).toEqual(
        [{id: 'pr1', name: 'Number One'}]
      )
    })

    it('If product not found in list, state is unchanged', () => {
      action.payload.productId = 'pr3'
      expect(productsReducer(stateWithEmptyBasket, action)).toEqual(stateWithEmptyBasket)
    })
  })
})
