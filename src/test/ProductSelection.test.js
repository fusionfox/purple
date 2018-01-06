import React from 'react'
import ReactDOM from 'react-dom'
import ProductSelection from '../js/ProductSelection'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProductSelection />, div)
})
