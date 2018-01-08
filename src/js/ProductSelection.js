import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/ProductSelection.css'
import ProductList from './components/ProductList'
import Basket from './components/Basket'

import { fetchProducts, addProduct, removeProduct } from './actions/productsActions'
import { getCustomerID, getLocationID } from './actions/userActions'

const handleProductSelection = (dispatch, category) => e => {
  if (e.target.checked) {
    dispatch(addProduct(e.target.value, category))
  } else {
    dispatch(removeProduct(e.target.value))
  }
}

const isProductInList = products => id => products.find(product => product.id === id)

class ProductSelection extends Component {
  componentDidMount () {
    this.props.dispatch(getCustomerID())
      .then(customerID => this.props.dispatch(getLocationID(customerID.value)))
      .then(locationID => this.props.dispatch(fetchProducts(locationID.value)))
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
            isProductSelected={isProductInList(this.props.basket)}
            handleProductSelection={handleProductSelection(this.props.dispatch, 'sports')}
          />
          <ProductList
            title='News'
            products={this.props.products.news}
            isProductSelected={isProductInList(this.props.basket)}
            handleProductSelection={handleProductSelection(this.props.dispatch, 'news')}
          />
          <Basket
            products={this.props.basket}
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
