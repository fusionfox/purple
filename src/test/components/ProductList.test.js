import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from '../../js/components/ProductList'

const products = [
  {id: 'pr1', name: 'Number One'},
  {id: 'pr2', name: 'Number Two'}
]

describe('ProductList component', () => {
  it('Renders a list of products with a title', () => {
    const component = renderer.create(
      <ProductList
        title='HelloWorld'
        products={products}
        handleProductSelection={() => null}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
