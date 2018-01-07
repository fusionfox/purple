import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from './js/store'
import ProductSelection from './js/ProductSelection'

ReactDOM.render(<Provider store={store}>
  <ProductSelection />
</Provider>, document.getElementById('root'))
