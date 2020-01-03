import React from 'react'

import './search-panel.css'

export default ({ term, onTermChange }) => {

  return (
    <input type="text"
           className="form-control search-input"
           placeholder="type to search"
           onChange={ e => onTermChange(e.target.value) }
           value={ term } />
  )
}