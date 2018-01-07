import productsReducer from '../../js/reducers/productsReducer'

describe('productsReducer', () => {
  const stateWithEmptyBasket = {
    productList: [
      {id: 'pr1', name: 'Number One'},
      {id: 'pr2', name: 'Number Two'}
    ],
    basket: []
  }

  const stateWithItemsInBasket = {
    productList: [
      {id: 'pr1', name: 'Number One'},
      {id: 'pr2', name: 'Number Two'}
    ],
    basket: [
      {id: 'pr1', name: 'Number One'}
    ]
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

  describe('REMOVE_PRODUCT action', () => {
    const action = {
      type: 'REMOVE_PRODUCT',
      payload: {}
    }

    it('If product found in basket, is removed', () => {
      action.payload.productId = 'pr1'
      expect(productsReducer(stateWithItemsInBasket, action).basket).toEqual([])
    })

    it('If product not found in basket, state is unchanged', () => {
      action.payload.productId = 'pr3'
      expect(productsReducer(stateWithItemsInBasket, action)).toEqual(stateWithItemsInBasket)
    })
  })
})
