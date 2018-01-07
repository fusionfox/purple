const initialState = {
  productList: [
    {id: 'pr1', name: 'Number One'},
    {id: 'pr2', name: 'Number Two'}
  ],
  basket: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const selectedProduct = state.productList.find(product =>
        product.id === action.payload.productId)

      return {
        ...state,
        basket: selectedProduct ? [...state.basket, selectedProduct] : state.basket
      }
    }
    case 'REMOVE_PRODUCT': {
      return {
        ...state,
        basket: state.basket.filter(product => product.id !== action.payload.productId)
      }
    }
    default: return state
  }
}
