import React from 'react'
import '../../css/components/ProductList.css'
import SelectableItem from './SelectableItem'

const ProductList = props => {
  const products = props.products.map(product => {
    return <li key={product.id} className='ProductList-product'>
      <SelectableItem
        name={product.name}
        id={product.id}
        selected={props.isProductSelected}
        handleItemSelection={props.handleProductSelection}
      />
    </li>
  })

  const EmptyListMessage = props => {
    if (products.length === 0) {
      return <p>No Products Available</p>
    } else {
      return null
    }
  }

  return (
    <figure className='ProductList'>
      <figcaption className='ProductList-title'>{props.title}</figcaption>
      <ul className='ProductList-list'>
        {products}
      </ul>
      <EmptyListMessage />
    </figure>
  )
}

export default ProductList
