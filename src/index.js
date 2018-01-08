import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import store from './js/store'
import ProductSelection from './js/ProductSelection'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={ProductSelection} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
