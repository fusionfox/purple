import React from 'react'
import '../../css/components/SelectableItem.css'

const SelectableItem = (props) => {
  return (
    <label className='SelectableItem-label'>
      <input
        className='SelectableItem-item'
        type='checkbox'
        name='product'
        value={props.id}
        onChange={props.handleItemSelection}
      />
      {props.name}
    </label>
  )
}

export default SelectableItem
