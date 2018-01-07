export function addProduct (productId) {
  return {
    type: 'SELECT_PRODUCT',
    payload: {
      productId
    }
  }
}
