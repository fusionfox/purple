import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from '../../js/components/ProductList'

const products = [
  {id: '1', name: 'Number One'},
  {id: '2', name: 'Number Two'}
]

describe('ProductList component', () => {
  it('Renders a list of products with a title', () => {
    const component = renderer.create(
      <ProductList title='HelloWorld' products={products} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
