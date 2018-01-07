export function addProduct (productId) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      productId
    }
  }
}
