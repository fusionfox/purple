import React, { Component } from 'react'
import '../css/ProductSelection.css'
import ProductList from './components/ProductList'

const products = [
  {id: 'pr1', name: 'Number One'},
  {id: 'pr2', name: 'Number Two'}
]

class ProductSelection extends Component {
  render () {
    return (
      <div className='ProductSelection'>
        <header className='ProductSelection-header'>
          <h1 className='ProductSelection-title'>Product Selection</h1>
        </header>
        <div className='ProductSelection-body'>
          <ProductList title='HelloWorld' products={products} />
        </div>
      </div>
    )
  }
}

export default ProductSelection
