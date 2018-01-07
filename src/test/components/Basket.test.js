import React from 'react'
import renderer from 'react-test-renderer'
import Basket from '../../js/components/Basket'

const products = [
  {id: 'pr1', name: 'Number One'},
  {id: 'pr2', name: 'Number Two'}
]

describe('Basket component', () => {
  it('Renders a list of products with the title "Basket" and a checkout button', () => {
    const component = renderer.create(
      <Basket
        products={products}
        handleCheckout={() => null}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
