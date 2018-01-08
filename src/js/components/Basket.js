import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/components/Basket.css'

const Basket = props => {
  const products = props.products.map(product => {
    return <li key={product.id} className='Basket-product'>{product.name}</li>
  })

  const EmptyBasketMessage = props => {
    if (products.length === 0) {
      return <p>Basket is empty</p>
    } else {
      return null
    }
  }

  return (
    <figure className='Basket'>
      <figcaption className='Basket-title'>Basket</figcaption>
      <ul className='Basket-list'>
        {products}
      </ul>
      <EmptyBasketMessage />
      <Link to={'/checkout'}>
        <button className='Basket-button'>Checkout</button>
      </Link>
    </figure>
  )
}

export default Basket
