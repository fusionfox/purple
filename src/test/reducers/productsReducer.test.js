import productsReducer from '../../js/reducers/productsReducer'

describe('productsReducer', () => {
  const stateWithEmptyBasket = {
    productList: {
      sports: [
        {id: 'sp1', category: 'sports', name: 'Sport One'},
        {id: 'sp2', category: 'sports', name: 'Sport Two'}
      ],
      news: [
        {id: 'nw1', category: 'news', name: 'News One'}
      ]
    },
    basket: []
  }

  const stateWithItemsInBasket = {
    ...stateWithEmptyBasket,
    basket: [
      {id: 'sp1', category: 'sports', name: 'Sport One'}
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
      const actionWithValidPayload = {
        ...action,
        payload: {
          productId: 'sp1',
          category: 'sports'
        }
      }

      expect(productsReducer(stateWithEmptyBasket, actionWithValidPayload).basket).toEqual(
        [{id: 'sp1', category: 'sports', name: 'Sport One'}]
      )
    })

    it('If product not found in list, state is unchanged', () => {
      const actionWithInvalidPayload = {
        ...action,
        payload: {
          productId: 'nw2',
          category: 'news'
        }
      }

      expect(productsReducer(stateWithEmptyBasket, actionWithInvalidPayload)).toEqual(stateWithEmptyBasket)
    })
  })

  describe('REMOVE_PRODUCT action', () => {
    const action = {
      type: 'REMOVE_PRODUCT',
      payload: {}
    }

    it('If product found in basket, is removed', () => {
      const actionWithValidPayload = {
        ...action,
        payload: {
          productId: 'sp1',
          category: 'sports'
        }
      }

      expect(productsReducer(stateWithItemsInBasket, actionWithValidPayload).basket).toEqual([])
    })

    it('If product not found in basket, state is unchanged', () => {
      const actionWithInvalidPayload = {
        ...action,
        payload: {
          productId: 'nw1',
          category: 'news'
        }
      }

      expect(productsReducer(stateWithItemsInBasket, actionWithInvalidPayload)).toEqual(stateWithItemsInBasket)
    })
  })

  describe('When fetching data', () => {
    const initialState = {
      productList: [],
      basket: [],
      error: null
    }

    describe('Request is successful', () => {
      const action = {
        type: 'FETCH_PRODUCTS_FULFILLED',
        payload: {data: {products: []}}
      }

      it('Returns only Sports products', () => {
        const actionWithOnlySportProducts = {
          ...action,
          payload: {data: {products: [
                {id: 'sp1', category: 'sports', name: 'Sport One'},
                {id: 'sp2', category: 'sports', name: 'Sport Two'}
          ]}}
        }

        expect(productsReducer(initialState, actionWithOnlySportProducts)).toEqual({
          productList: {
            sports: [
              {id: 'sp1', category: 'sports', name: 'Sport One'},
              {id: 'sp2', category: 'sports', name: 'Sport Two'}
            ],
            news: []
          },
          basket: [],
          error: null
        })
      })

      it('Returns only News products', () => {
        const actionWithOnlyNewsProducts = {
          ...action,
          payload: {data: {products: [
            {id: 'nw1', category: 'news', name: 'News One'},
            {id: 'nw2', category: 'news', name: 'News Two'}
          ]}}
        }

        expect(productsReducer(initialState, actionWithOnlyNewsProducts)).toEqual({
          productList: {
            sports: [],
            news: [
              {id: 'nw1', category: 'news', name: 'News One'},
              {id: 'nw2', category: 'news', name: 'News Two'}
            ]
          },
          basket: [],
          error: null
        })
      })

      it('Returns both Sports and News products', () => {
        const actionWithSportsAndNewsProducts = {
          ...action,
          payload: {data: {products: [
            {id: 'sp1', category: 'sports', name: 'Sport One'},
            {id: 'sp2', category: 'sports', name: 'Sport Two'},
            {id: 'nw1', category: 'news', name: 'News One'}
          ]}}
        }

        expect(productsReducer(initialState, actionWithSportsAndNewsProducts)).toEqual({
          productList: {
            sports: [
              {id: 'sp1', category: 'sports', name: 'Sport One'},
              {id: 'sp2', category: 'sports', name: 'Sport Two'}
            ],
            news: [
              {id: 'nw1', category: 'news', name: 'News One'}
            ]
          },
          basket: [],
          error: null
        })
      })
    })

    it('Request is unsuccessful', () => {
      const action = {
        type: 'FETCH_PRODUCTS_REJECTED',
        payload: 'error'
      }

      expect(productsReducer(initialState, action)).toEqual({
        productList: [],
        basket: [],
        error: 'error'
      })
    })
  })
})
