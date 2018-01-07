const initialState = {
  productList: [
    {id: 'pr1', name: 'Number One'},
    {id: 'pr2', name: 'Number Two'}
  ]
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}
