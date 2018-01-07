import React from 'react'
import renderer from 'react-test-renderer'
import SelectableItem from '../../js/components/SelectableItem'

describe('SelectableItem component', () => {
  it('Renders a checkbox input with a label', () => {
    const component = renderer.create(
      <SelectableItem name='Product Name' id='product1' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
