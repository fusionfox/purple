const initialState = {
  productList: [],
  basket: [],
  error: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_FULFILLED': {
      return {
        ...state,
        productList: action.payload.data.products
      }
    }
    case 'FETCH_PRODUCTS_REJECTED': {
      return {
        ...state,
        error: action.payload
      }
    }
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
