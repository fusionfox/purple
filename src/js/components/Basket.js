import React from 'react'
import '../../css/components/Basket.css'

const Basket = props => {
  const products = props.products.map(product => {
    return <li key={product.id} className='Basket-product'>{product.name}</li>
  })

  return (
    <figure className='Basket'>
      <figcaption className='Basket-title'>Basket</figcaption>
      <ul className='Basket-list'>
        {products}
      </ul>
      <button className='Basket-button' onClick={props.handleCheckout}>Checkout</button>
    </figure>
  )
}

export default Basket
