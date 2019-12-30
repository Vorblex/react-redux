import React from 'react'
import TodoListItem from './todo-list-item'

export default ( { items } ) => {

  const elements = items.map( ({ id, ...item }) => {
    return (
      <li  key={ id }>
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