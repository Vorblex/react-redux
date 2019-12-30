import React from 'react'
import TodoListItem from '../todo-list-item'

import './todo-list.css'

export default ( { items } ) => {

  const elements = items.map( ({ id, ...item }) => {
    return (
      <li  key={ id } className="list-group-item">
        <TodoListItem { ...item }/>
      </li>
    )
} )

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}