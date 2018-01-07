import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/ProductSelection.css'
import ProductList from './components/ProductList'

import { addProduct } from './actions/productsActions'

const handleProductSelection = dispatch => e => {
  if (e.target.checked) {
    dispatch(addProduct(e.target.value))
  } else {
    console.log(`${e.target.value} de-selected`)
  }
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.productList
})

export default connect(mapStateToProps)(ProductSelection)
