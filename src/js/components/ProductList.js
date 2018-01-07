import React from 'react'
import '../../css/components/ProductList.css'
import SelectableItem from './SelectableItem'

const ProductList = (props) => {
  let products = props.products.map((product) => {
    return <li key={product.id} className='ProductList-product'>
      <SelectableItem
        name={product.name}
        id={product.id}
        handleItemSelection={props.handleProductSelection}
      />
    </li>
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
