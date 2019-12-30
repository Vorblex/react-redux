import React from 'react'
import TodoListItem from './todo-list-item'

export default ( { items } ) => {

  const elements = items.map( item => {
    return (
      <li  key={ item.label }>
        <TodoListItem { ...item }/>
      </li>
    )
} )

  return (
    <ul>
      { elements }
    </ul>
  )
}