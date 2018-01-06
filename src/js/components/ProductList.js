import React from 'react'
import '../../css/components/ProductList.css'

const ProductList = (props) => {
  let products = props.products.map((product) => {
    return <li key={product.id} className='ProductList-product'>{product.name}</li>
  })

  return (
    <figure className='ProductList'>
      <figcaption className='ProductList-title'>{props.title}</figcaption>
      <ul className='ProductList-list'>
        {products}
      </ul>
    </figure>
  )
}

export default ProductList
