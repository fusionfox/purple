import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Checkout extends Component {
  render () {
    const selectedProducts = this.props.basket.map(product => {
      return <li key={product.id} className='Basket-product'>{product.name}</li>
    })

    return (
      <div>
        <h1>Checkout</h1>
        <p><strong>customerID:</strong> {this.props.customerID}</p>
        <figure>
          <figcaption><strong>Selected Products:</strong></figcaption>
          <ul>
            {selectedProducts}
          </ul>
        </figure>
        <Link to={'/'}>
          Return to Product Selection
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  customerID: state.user.customerID,
  basket: state.products.basket
})

export default connect(mapStateToProps)(Checkout)
