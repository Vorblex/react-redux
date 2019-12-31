import React from 'react'

import './item-add-form.css'

export default ({addItem}) => {

  return (
    <div className="item-add-form text-center mt-3">
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={ ()=> addItem('new') }>
        Add item
      </button>
    </div>
  )
}