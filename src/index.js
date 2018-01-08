import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css'
import store from './js/store'
import ProductSelection from './js/ProductSelection'
import Checkout from './js/Checkout'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/' component={ProductSelection} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
