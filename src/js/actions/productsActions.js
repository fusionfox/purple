import axios from 'axios'

export function fetchProducts (locationID) {
  return {
    type: 'FETCH_PRODUCTS',
    payload: axios.get(`/products?locationID=${locationID}`)
  }
}

export function addProduct (productId, category) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      productId,
      category
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
