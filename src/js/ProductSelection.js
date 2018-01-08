import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/ProductSelection.css'
import ProductList from './components/ProductList'
import Basket from './components/Basket'

import { fetchProducts, addProduct, removeProduct } from './actions/productsActions'

const handleProductSelection = (dispatch, category) => e => {
  if (e.target.checked) {
    dispatch(addProduct(e.target.value, category))
  } else {
    dispatch(removeProduct(e.target.value))
  }
}

const handleCheckout = () => {
  console.log('Checkout!')
}

class ProductSelection extends Component {
  componentDidMount () {
    this.props.dispatch(fetchProducts())
  }

  render () {
    return (
      <div className='ProductSelection'>
        <header className='ProductSelection-header'>
          <h1 className='ProductSelection-title'>Product Selection</h1>
        </header>
        <div className='ProductSelection-body'>
          <ProductList
            title='Sports'
            products={this.props.products.sports}
            handleProductSelection={handleProductSelection(this.props.dispatch, 'sports')}
          />
          <ProductList
            title='News'
            products={this.props.products.news}
            handleProductSelection={handleProductSelection(this.props.dispatch, 'news')}
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
