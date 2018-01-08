import React from 'react'
import renderer from 'react-test-renderer'
import ProductList from '../../js/components/ProductList'

describe('ProductList component', () => {
  it('Renders a list of products with a title', () => {
    const component = renderer.create(
      <ProductList
        title='HelloWorld'
        products={[
          {id: 'pr1', name: 'Number One'},
          {id: 'pr2', name: 'Number Two'}
        ]}
        handleProductSelection={() => null}
        isProductSelected={() => false}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders a message if given no products', () => {
    const component = renderer.create(
      <ProductList
        title='HelloWorld'
        products={[]}
        handleProductSelection={() => null}
        isProductSelected={() => false}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
