import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/ProductSelection.css'
import ProductList from './components/ProductList'
import Basket from './components/Basket'

import { addProduct, removeProduct } from './actions/productsActions'

const handleProductSelection = dispatch => e => {
  if (e.target.checked) {
    dispatch(addProduct(e.target.value))
  } else {
    dispatch(removeProduct(e.target.value))
  }
}

const handleCheckout = () => {
  console.log('Checkout!')
}

class ProductSelection extends Component {
  render () {
    return (
      <div className='ProductSelection'>
        <header className='ProductSelection-header'>
          <h1 className='ProductSelection-title'>Product Selection</h1>
        </header>
        <div className='ProductSelection-body'>
          <ProductList
            title='HelloWorld'
            products={this.props.products}
            handleProductSelection={handleProductSelection(this.props.dispatch)}
          />
          <Basket
            products={this.props.basket}
            handleCheckout={handleCheckout}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.productList,
  basket: state.products.basket
})

export default connect(mapStateToProps)(ProductSelection)
