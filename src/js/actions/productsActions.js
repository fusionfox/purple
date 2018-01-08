import axios from 'axios'

export function fetchProducts () {
  return {
    type: 'FETCH_PRODUCTS',
    payload: axios.get('/products')
  }
}

export function addProduct (productId) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      productId
    }
  }
}

export function removeProduct (productId) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      productId
    }
  }
}
