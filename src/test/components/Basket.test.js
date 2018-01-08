import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Basket from '../../js/components/Basket'

const products = [
  {id: 'pr1', name: 'Number One'},
  {id: 'pr2', name: 'Number Two'}
]

describe('Basket component', () => {
  it('Renders a list of products with the title "Basket" and a checkout button', () => {
    const component = renderer.create(
      <Router>
        <Basket products={products} />
      </Router>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders a message if given no products', () => {
    const component = renderer.create(
      <Router>
        <Basket products={[]} />
      </Router>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
