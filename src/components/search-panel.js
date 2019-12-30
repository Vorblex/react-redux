import React from 'react'

export default () => {

  const searchText = 'Type here'
  const searchStyle = {
    fontSize: '20px'
  }
  return (
    <input style={ searchStyle } placeholder={searchText} />
  )
}