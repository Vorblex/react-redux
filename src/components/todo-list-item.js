import React from 'react'

export default ({ important = false, label }) => {

  const impStyle = { color: important ? 'red' : 'blue' }

  return (
    <span style={ impStyle }>{ label }</span>
  )
}